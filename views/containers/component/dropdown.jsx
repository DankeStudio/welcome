var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {selectedItem: this.props.default}
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (nextProps.data != this.props.data || nextProps.resetWhenChanged != this.props.resetWhenChanged
            || nextState.selectedItem != this.state.selectedItem){
            if (nextState.selectedItem == this.state.selectedItem)
                this.setState({selectedItem: this.props.default});
            return true;
        }
        else return false;
    },
    handleClick: function() {
        var name = this.props.name;
        var body = $(this.refs[name]).children('.dp-body');
        var collapse = $(this.refs[name]).children('.dp-title').children('i');
        var item = $(body).children('label');
        if(collapse.css('transform')=='matrix(1.4, 0, 0, 1.4, 0, 0)') {
            if(item) body.css('height', item.outerHeight()*item.length+'px');
            collapse.css('transform', 'rotate(180deg) scale(1.4)');
        }
        else {
            if(item) body.css('height', '0px');
            collapse.css('transform', 'rotate(0deg) scale(1.4)');
        }
    },
    handleChecked: function(i, e) {
        this.setState({selectedItem: e.currentTarget.value});
        this.props.handleChecked(e.currentTarget.value, i);
    },
    render: function() {
        return (
            <div className="dropdown" ref={this.props.name} onClick={this.handleClick}>
                <div className="dp-title">
                    {this.state.selectedItem}
                    <i className="fa fa-caret-down"></i>
                </div>
                <div className="dp-body">
                    {this.props.data.map((data, i) =>
                        <label key={i}>
                            <input type="radio" name={this.props.name} value={data} 
                                   checked={this.state.selectedItem === data}
                                   onChange={this.handleChecked.bind(null, i)} />
                            {data}
                        </label>
                    )}
                </div>
            </div>
        )
    }
});