import { Component } from 'react';
import Header from './component/inHeader.jsx';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: [],
            events: []
        }
    }
    componentDidMount() {
        /*
        $.get('/event', (data) => {
            let events = data.body.events;
            events.forEach((event) => {
                event.link = '#/form/'+event.eventID;
            })
            if (data.code == 0)
                this.setState({events: events});
        });
        */
    }
    render() {
        let gaItems = [{link: '', img: 'https://files.catbox.moe/1n7s8c.png'},{link: '', img: 'https://files.catbox.moe/tmq86w.png'},{link: '', img: 'https://files.catbox.moe/x5u1as.png'}],
            eventItems = 
                [{title: '蛋壳工作室纳新', wishes: ['产品','前端'], due: new Date(), date: new Date(), link: '#/form/1'},
                {title: '蛋壳工作室纳新', wishes: ['产品','前端'], due: new Date(), date: new Date(), link: '#/form/1'},
                {title: '蛋壳工作室纳新', wishes: ['产品','前端'], due: new Date(), date: new Date(), link: '#/form/1'},
                {title: '蛋壳工作室纳新', wishes: ['产品','前端'], due: new Date(), date: new Date(), link: '#/form/1'},
                {title: '蛋壳工作室纳新', wishes: ['产品','前端'], due: new Date(), date: new Date(), link: '#/form/1'}];
        return (
            <div id="index-content">
                <Header />
                <Gallery items={gaItems}/>
                <EventsList items={eventItems}/>
                <FunBar />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </div>
        )
    }
};

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            active: 0,
            documentWidth: 0
        }
        this._handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this._handleResize);
        this._handleResize();
        if (this.state.items.length > 1) {
            let intervalID = setInterval(this.go.bind(this), 2000);
            this.setState({intervalID: intervalID});
        }
    }
    handleResize() {
        let documentWidth = $(document).width();
        let itemsNum = this.state.items.length > 1 ?  this.state.items.length+2 : 1; 
        $(this.refs['ga-container']).css({
            'width': documentWidth*itemsNum+'px',
            'borderSpacing': (this.state.active+1)*documentWidth,
            'transform': 'translateX(-'+(this.state.active+1)*documentWidth+'px)'});
        for(let i=-1; i<=this.state.items.length; i++)
            if (this.refs['item-'+i])
                $(this.refs['item-'+i]).css('width', documentWidth+'px');
        this.setState({documentWidth: documentWidth});
    }
    go(i) {
        if (i && this.state.intervalID) {
            clearInterval(this.state.intervalID);
            this.setState({intervalID: 0});
        }
        i = i == undefined ? this.state.active+1 : i;
        $(this.refs['ga-container']).animate({borderSpacing: (i+1)*this.state.documentWidth}, {
            step: function(now, fx) {
                $(this).css('transform', 'translateX(-'+now+'px)');
            },
            easing: 'linear',
            complete: () => {
                if (i>=this.state.items.length || i==-1) {
                    i = i==-1 ? this.state.items.length-1 : 0;
                    $(this.refs['ga-container']).css({
                        'transform': 'translateX(-'+(i+1)*this.state.documentWidth+'px)',
                        'borderSpacing': (i+1)*this.state.documentWidth
                    });
                }
                this.setState({active: i});
            }
        });
    }
    render() {
        let itemsData = this.state.items, 
            itemHead, itemTail, indexes;
        if (itemsData.length > 1) {
            itemHead = (<div key='-1' ref='item--1'  className="ga-item">
                            <a href={itemsData[itemsData.length-1].link}>
                                <img src={itemsData[itemsData.length-1].img}/>
                            </a>
                        </div>);
            itemTail = (<div key={itemsData.length} ref={'item-'+itemsData.length} className="ga-item">
                            <a href={itemsData[0].link}>
                                <img src={itemsData[0].img}/>
                            </a>
                        </div>);
            indexes = this.state.items.map((item,i) => (
                          <span key={i} className={this.state.active == i ? 'active' : ''}
                               onClick={this.go.bind(this, i)}></span>
                      ));
        }
        const items = this.state.items.map((item, i) => (
                <div key={i} ref={'item-'+i} className="ga-item">
                    <a href={item.link}><img src={item.img}/></a>
                </div>
        ));
        return (
            <div id="gallery">
                <div ref="ga-container">
                    {itemHead}
                    {items}
                    {itemTail}
                </div>
                <div className="ga-control" id="prev" onClick={this.go.bind(this, this.state.active-1)}>
                    <i className="fa fa-caret-left"></i>
                </div>
                <div className="ga-control" id="next" onClick={this.go.bind(this, this.state.active+1)}>
                    <i className="fa fa-caret-right"></i>
                </div> 
                <div id="ga-index">
                    {indexes}
                </div>
            </div>
        )
    }
};

class EventsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
       };
    }
    render() {
        const items = this.state.items.map((item, i) => (
                <div key={i} className="event-info">
                    <div className="org-avatar"><img src="" alt=""/></div>
                    <div className="org-info">
                        <a href={item.link}><h1>{item.title}</h1></a>
                        <ol>
                            {item.wishes.map((wish, i) => (
                                <li key={i}>{wish}</li>
                            ))}
                        </ol>
                        <div className="date">
                            {item.due.getFullYear()+'-'+item.due.getMonth()+'-'+item.due.getDate()}截止
                        </div>
                        <div className="date begin">
                            {item.date.getFullYear()+'-'+item.date.getMonth()+'-'+item.date.getDate()}发布
                        </div>
                    </div>
                </div>
        ));
        return (
            <div id="event-list">
                {items}
            </div>
        )
    }
}

class FunBar extends Component {
    render() {
        return (
            <div id="nav-bottom">
                <div><a href="#"><i className="fa fa-calendar-o"></i>社团事项</a></div>
                <div><a href="#"><i className="fa fa-file-text-o"></i>我的报名</a></div>
            </div>
        )
    }
}