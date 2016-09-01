/*
 * Modified by ukabuer(ukabuer@live.com)
 * 8/2016
 * /

/*
 @author: Maelig GOHIN For ARCA-Computing - www.arca-computing.fr
 @date: October 2015
 @version: 1.0.3
 @description:  MultipleDatePickerReact is a React component to show a simple calendar allowing user to select multiple dates.
 Css style can be changed by editing less or css stylesheet.
 Feel free to edit and share this piece of code, our idea is to keep it simple ;)
 */

module.exports = React.createClass({
	getInitialState: function() {
		return {
			month:  this.props.month || new Date(),
			highlightDays: this.props.highlightDays.slice() || [],
			weekDaysOff: this.props.weekDaysOff || [],
			close: false
		}
	},
	daySelectionChanged: function(day, selected){
		var hD = this.state.highlightDays,
			found = hD.filter(function(d){
				return d.day.getYear() == day.getYear && d.day.getMonth() == day.getMonth && d.day.getDate() == day.getDate();
			}),
			toChanged = {day: day, notSelectable: true, selected: selected};

		if(found.length){
			toChanged = found[0];
			var index = hD.indexOf(toChanged);
			toChanged.selected = selected;
			hD[index] = toChanged;
		}else{
			hD.push(toChanged);
		}
		this.setState({highlightDays: hD});
	},
	componentWillReceiveProps: function(nextProps) {
		if (this.state.close)
			this.setState({
				month:  nextProps.month || new Date(),
				highlightDays: nextProps.highlightDays.slice() || [],
				weekDaysOff: nextProps.weekDaysOff || [],
			});
	},
	getDaysOfWeek: function () {
        var momentDaysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            days = [];

        for (var i = 1; i < 7; i++) {
            days.push(momentDaysOfWeek[i]);
        }

        if (this.props.sundayFirstDay) {
            days.splice(0, 0, momentDaysOfWeek[0]);
        } else {
            days.push(momentDaysOfWeek[0]);
        }

        return days.map(function(day, i){
			return (<div key={day} className="text-center">{day}</div>);
		});
    },
    getEmptyFirstDays: function(firstDayOfMonth){
	    var emptyFirstDaysStartIndex = firstDayOfMonth.getDay() === 0 ? (this.props.sundayFirstDay ? 0 : 6) : (firstDayOfMonth.getDay() - (this.props.sundayFirstDay ? 0 : 1));
	    return Array.apply(0, new Array(emptyFirstDaysStartIndex)).map(function(o, i){
			return (<div key={'emptyFirst' + i} className="text-center picker-day picker-empty">&nbsp;</div>);
		});
    },
    getEmptyLastDays: function(lastDayOfMonth){
	    var emptyLastDaysStartIndex = this.props.sundayFirstDay ? 6 : 7;
	    if (lastDayOfMonth.getDay() === 0 && !this.props.sundayFirstDay) {
            emptyLastDaysStartIndex = 0;
        } else {
            emptyLastDaysStartIndex -= lastDayOfMonth.getDay();
        }
	    return Array.apply(0, new Array(emptyLastDaysStartIndex)).map(function(o, i){
			return (<div key={'emptyLast' + i} className="text-center picker-day picker-empty">&nbsp;</div>);
		});
    },
    getDays: function(previousDay, lastDayOfMonth){
		return Array.apply(0, new Array(lastDayOfMonth.getDate())).map(function(x, i){
        	var day = new Date(previousDay.setDate(previousDay.getDate()+1)),
        		hDay = this.state.highlightDays.filter(function(d){
					return d.day.getYear() == day.getYear() && d.day.getMonth() == day.getMonth() && d.day.getDate() == day.getDate();
	    		});
			hDay = hDay[0] || {day: day};
			return (<MultipleDatePickerDay 
				key={hDay.day.valueOf()}
				day={hDay.day} 
				css={hDay.css} 
				notSelectable={hDay.notSelectable || this.state.weekDaysOff.indexOf(day.getDay()) > -1} 
				selected={hDay.selected}
				title={hDay.title}
				dayClick={this.props.dayClick} 
				dayHover={this.props.dayHover} 
				dayClickContext={this.props.callbackContext}
				daySelectionChanged={this.daySelectionChanged} />);
        }, this);
    },
    goToPreviousMonth: function(){
    	if(typeof this.props.changeMonth !== 'function' || this.props.changeMonth.call(this.props.callbackContext, new Date(this.props.month), -1)){
    		var tmp = new Date(this.state.month); tmp.setMonth(this.state.month.getMonth()-1);
			this.setState({month: tmp});
    	}
    },
    goToNextMonth: function(){
    	if(typeof this.props.changeMonth !== 'function' || this.props.changeMonth.call(this.props.callbackContext, new Date(this.props.month), 1)){
    		var tmp = new Date(this.state.month); tmp.setMonth(this.state.month.getMonth()+1);
			this.setState({month: tmp});
    	}
    },
	closePicker: function() {
		this.setState({close: true});
		this.props.closePicker();
	},
	render: function(){
		let lastDayOfPreviousMonth = new Date(this.state.month); 
		lastDayOfPreviousMonth.setDate(0);
        let firstDayOfMonth = new Date(this.state.month); 
		firstDayOfMonth.setDate(1);
		let lastDayOfMonth = new Date(1900+firstDayOfMonth.getYear(), firstDayOfMonth.getMonth()+1); 
		lastDayOfMonth.setDate(0);
		let nameOfMonths = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

		return (
			<div className="multiple-date-picker">
			    <i className='fa fa-close' onClick={this.closePicker}></i>
	            <div className="picker-top-row">
		            <div className="text-center picker-navigate picker-navigate-left-arrow" onClick={this.goToPreviousMonth}>&lt;</div>
		            <div className="text-center picker-month">{(1900+this.state.month.getYear())+' '+nameOfMonths[this.state.month.getMonth()]}</div>
		            <div className="text-center picker-navigate picker-navigate-right-arrow" onClick={this.goToNextMonth}>&gt;</div>
	            </div>
	            <div className="picker-days-week-row">{this.getDaysOfWeek()}</div>
	            <div className="picker-days-row">
	            	{this.getEmptyFirstDays(firstDayOfMonth)}
		            {this.getDays(lastDayOfPreviousMonth, lastDayOfMonth)}
		            {this.getEmptyLastDays(lastDayOfMonth)}
	            </div>
			</div>
		);
	}
});

var MultipleDatePickerDay = React.createClass({
	componentWillMount: function(){
		this.setState({
			selected: this.props.selected || false
		});
	},
	handleClick: function(){
		if(!this.props.notSelectable && (typeof this.props.dayClick !== 'function' || this.props.dayClick.call(this.props.dayClickContext, new Date(this.props.day), this.state.selected))){
			var newState = !this.state.selected;
			this.setState({selected: newState});
			this.props.daySelectionChanged(this.props.day, newState);
		}
	},
	handleHover: function(){
		if(typeof this.props.dayHover === 'function'){
			this.props.dayHover.call(this.props.callbackContext, new Date(this.props.day), this.state.selected);
		}
	},
	render: function(){
		var classes = 'text-center picker-day';
		var today = new Date(); today.setHours(0); today.setMinutes(0); today.setMilliseconds(0);
		var day = new Date(this.props.day); day.setHours(0); day.setMinutes(0); day.setMilliseconds(0);
		classes += this.state.selected ? ' picker-selected' : '';
		classes += day - today == 0 ? ' today' : '';
		classes += day - today < 0 ? ' past' : '';
		classes += day - today > 0 ? ' future' : '';
		classes += this.props.notSelectable ? ' picker-off' : '';
		classes += ' ' + (this.props.css || '');
		return (<div className={classes} title={this.props.title} onClick={this.handleClick} onMouseEnter={this.handleHover}>{this.props.day.getDate()}</div>);
	}
});
