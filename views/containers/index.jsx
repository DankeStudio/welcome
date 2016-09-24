import { Component } from 'react';
import Header from './component/inHeader.jsx';

export default class extends Component {
    constructor() {
        super();
        this.state = {
            gallery: [
                {link: '', img: 'http://static.zju-welcome.com/img/GfolBzh.png'},
                {link: '', img: 'http://static.zju-welcome.com/img/AVWq9zk.png'}
            ],
            events: []
        }
    }
    componentDidMount() {
        $.get('/event/recent', (data) => {
            if (data.code == 0) {
                let events = data.body.events;
                let screen = document.body.clientWidth;
                events.forEach((event) => {
                    event.link = ((screen>800)?'#/form/':"#/mobile/form/")+event.eventID;
                })
                this.setState({events: events});
            }
            else
                alert('获取社团事项出错：' + data.msg);
        });
    }
    render() {
        /*return (
            <div id="index-content">
                <Header />
                <Gallery items={this.state.gallery}/>
                <EventsList items={this.state.events}/>
                <FunBar />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </div>
        )*/
        return (
            <div id="index-content">
                <Header />
                <Gallery items={this.state.gallery}/>
                <EventsList items={this.state.events}/>
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
    componentWillUnmount() {
        if (this.state.intervalID)
            clearInterval(this.state.intervalID);
        window.removeEventListener('resize', this._handleResize);
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
    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items
        })
    }
    render() {
        let items = [];
        this.state.items.map((item, i) => {
            let date = new Date(item.date);
            items.push(
                <div key={i} className="event-info" onClick={function(){window.location.href=item.link}}>
                    <div className="org-avatar"><p>{item.eventID}</p></div>
                    <div className="org-info">
                        <a><h1>{item.name}</h1></a>
                        <ol>
                            {item.wishes.map((wish, i) => (
                                <li key={i}>{wish}</li>
                            ))}
                        </ol>
                        <div className="date">
                            {date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()}发布
                        </div>
                        <div className="date begin">
                        </div>
                    </div>
                </div>
            )
        });
        if (items.length<5)
            for (let i=items.length; i<5; i++)
                items.push(
                    <div key={'append-'+i}className="event-info"></div>
                );
                
        return (
            <div id="event-list">
                {items}
                <div className="event-info" onClick={function(){window.open('http://www.lagou.com/jobs/2150423.html?source=pl&i=pl-2')}}>
                    <div className="org-avatar"><p>0</p></div>
                    <div className="org-info">
                        <a><h1>有数金服 实习生招聘</h1></a>
                        <ol>
                            <li>测试工程师（杭州）</li>
                        </ol>
                        <div className="date">
                            2016-9-16发布
                        </div>
                        <div style={{position: 'absolute', top: '5px', right: '5px', fontSize: '10px'}}>帮学长打个广告</div>
                    </div>
                </div>
            </div>
        )
    }
}

function FunBar() {
    return (
        <div id="nav-bottom">
            <div><a href="#"><i className="fa fa-calendar-o"></i>社团事项</a></div>
            <div><a href="#"><i className="fa fa-file-text-o"></i>我的报名</a></div>
        </div>
    )
}