import { Component } from 'react';
import Header from './component/inHeader.jsx';

export default class extends Component {
    constructor() {
        super();
        this.state = {
            gallery: [
                {link: '#', img: 'http://static.zju-welcome.com/img/GfolBzh.png'},
                {link: '#', img: 'http://static.zju-welcome.com/img/AVWq9zk.png'},
                {link: '#/form/1', img: 'http://static.zju-welcome.com/head.jpg'}
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
        //temp event 
        const tmp = [{eventID: 0, name: '浙江大学学生乒乓球协会纳新', wishes: ['干事(http://www.hdb.com/party/jw5gu.html?h_share_uid=&hdb_from=WXShare)','会员(http://iiz0i110ae4.51bmb.com/event/iiz0i110ae4)'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生毽球协会', wishes: ['干事：https://jinshuju.net/f/nGOlEb', '会员：https://jinshuju.net/f/WjYHQL'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生轮滑协会', wishes: [''], link: 'https://jinshuju.net/f/fBKsl0', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生羽毛球协会', wishes: [''], link: 'https://pan.baidu.com/s/1kU9ZTgr', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生“鹰的部落”排球社', wishes: ['QQ群：176044515（浙江大学排球协会）加群请注明zjuer身份哦~'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生篮球联盟', wishes: [''], link: 'http://pan.baidu.com/s/1pKWmjRt', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生Old School Skateboard滑板社', wishes: ['qq群:49022239'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生健身俱乐部', wishes: [''], link: 'http://biaodan100.com/f/57d8f9610cf2b911f87c2d06', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生足球协会', wishes: [''], link: 'http://event.51bmb.com/event/64top1108dc', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生户外运动俱乐部', wishes: [''], link: 'https://jinshuju.net/f/1iyXue', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生爱心社', wishes: [''], link: 'https://www.sojump.hk/m/9685031.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学红十字会学生分会', wishes: [''], link: 'http://event.51bmb.com/event/e32kt11018d', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生绿之源协会', wishes: [''], link: 'http://m.51bmb.com/event/37qlq1102bd', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生三农协会', wishes: [''], link: 'http://d.eqxiu.com/s/mLM2ZeUU', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生enactus学生圈', wishes: [''], link: 'https://www.sojump.hk/m/8420679.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学成长互助训练营', wishes: [''], link: 'http://form.mikecrm.com/iNRiW0', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生校友联络协会', wishes: [''], link: 'http://form.mikecrm.com/jCFM58', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生心系西部协会', wishes: [''], link: 'http://wraa.org/welcome/', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生动物保护者协会', wishes: [''], link: 'http://data.zjuapa.com/register.php?do=show&type=member', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生创智先锋社', wishes: [''], link: 'http://4lrk5110aae.51bmb.com/event/4lrk5110aae', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生E志者协会', wishes: [''], link: 'http://form.mikecrm.com/46HbE0', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生保健协会', wishes: [''], link: 'http://biaodan100.com/f/57d8f9610cf2b911f87c2d06', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生出国留学学生圈', wishes: [''], link: 'http://form.mikecrm.com/KeDDfE', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生雏鹰志愿服务协会', wishes: [''], link: 'http://m.51bmb.com/event/uvrd411031d', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生彩虹团队', wishes: [''], link: 'https://pan.baidu.com/s/1ohJqu', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生企业俱乐部联合会', wishes: [''], link: 'https://www.sojump.hk/m/9696519.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生旅游协会', wishes: [''], link: 'http://form.mikecrm.com/FYCrwd', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生无我茶社', wishes: ['干事:http://form.mikecrm.com/8cw1p0', '会员:http://form.mikecrm.com/i0zNI1'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生Fantasy动漫社', wishes: [''], link: 'http://zjufantasy.com/joinus', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生梵音剧社', wishes: [''], link: 'http://form.mikecrm.com/lbk7ct', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生吉他协会', wishes: ['干事:https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4a3d370be88079d3&redirect_uri=http%3A%2F%2Fweixiao.qq.com%2Fweixin%2Fquiet_login%3Fmedia%3D35472%26ref_url%3Dhttp%3A%2F%2Fweixiao.qq.com%2Factivity%2Fapply%2F68227%3Fmedia_id%3Dgh_b01d19d7ae36&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect','会员:https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4a3d370be88079d3&redirect_uri=http%3A%2F%2Fweixiao.qq.com%2Fweixin%2Fquiet_login%3Fmedia%3D35472%26ref_url%3Dhttp%3A%2F%2Fweixiao.qq.com%2Factivity%2Fapply%2F68191%3Fmedia_id%3Dgh_b01d19d7ae36&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生天文爱好者协会', wishes: ['提取码（127q）'], link: 'https://pan.baidu.com/s/1eRETH9w', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生美食社', wishes: [''], link: 'http://wangboxin.com:8080/food/', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生清韵钢琴社', wishes: [''], link: 'https://jinshuju.net/f/g8ZiNP', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生溯泱汉服社', wishes: [''], link: 'http://form.mikecrm.com/ihgOzp', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生插花与盆景协会', wishes: [''], link: 'http://m.51bmb.com/event/sezwz110312', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学粤语社', wishes: [''], link: 'https://pan.baidu.com/s/1kVJJlQn', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生烘焙社', wishes: [''], link: 'https://www.sojump.hk/m/9715388.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生医学进展研究会', wishes: [''], link: 'http://form.mikecrm.com/jfYgps', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生求是辩论社', wishes: [''], link: 'https://www.wenjuan.com/s/JJnEBr/', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生财商俱乐部', wishes: ['提取码5h36'], link: 'https://pan.baidu.com/s/1bTVcGQ ', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生POV协会', wishes: [''], link: 'http://form.mikecrm.com/FRosY9', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学物联网技术学生俱乐部', wishes: [''], link: 'http://form.mikecrm.com/xNMnhw', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生文学联合会', wishes: ['提取码：wodewenlian521'], link: 'http://box.myqsc.com', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生交谊舞协会', wishes: [''], link: 'http://form.mikecrm.com/WSaZPS', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生书画社', wishes: [''], link: 'http://form.mikecrm.com/4lzE2v', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生古琴研究会', wishes: [''], link: 'https://pan.baidu.com/s/1nuYsaVn', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生婉云京剧社', wishes: [''], link: 'http://event.51bmb.com/event/8taz5110afe', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生红楼海棠社', wishes: ['qq群254971056'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生子鼠诗社', wishes: [''], link: 'http://form.mikecrm.com/YYwFSn', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生自由七音协会', wishes: [''], link: 'https://pan.baidu.com/s/1kVdLPI3', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生昆曲研习社', wishes: [''], link: 'http://form.mikecrm.com/CsKies', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生礼仪与形象管理协会', wishes: [''], link: 'http://form.mikecrm.com/9IwfIG', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生白鸦画社', wishes: ['干事:https://www.sojump.hk/m/9481829.aspx', '会员:https://www.sojump.hk/m/9481829.aspx'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学研究生求是学社', wishes: [''], link: 'http://form.mikecrm.com/qsrleZ', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学统计学人', wishes: [''], link: 'https://pan.baidu.com/s/1bp0wGpx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学求是辩论社', wishes: [''], link: 'https://www.wenjuan.com/s/JJnEBr/', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学出国留学学生圈', wishes: [''], link: 'http://form.mikecrm.com/UChWbW', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学对外交流协会', wishes: [''], link: 'https://sojump.com/m/9631009.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学国际关系学会', wishes: [''], link: 'https://www.sojump.hk/m/9689242.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学光华法学辩论队', wishes: [''], link: 'https://yun.baidu.com/share/link?shareid=3714747411&uk=4246360084', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学求是强鹰俱乐部', wishes: [''], link: 'https://jinshuju.net/f/jqz9z7', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学金地俱乐部', wishes: [''], link: 'https://jinshuju.net/f/AKjzxl', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学联合利华俱乐部', wishes: ['密码：ekds'], link: 'http://pan.baidu.com/s/1kUUYDQv', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生乒乓球协会', wishes: ['干事:http://www.hdb.com/party/jw5gu','会员:http://iiz0i110ae4.51bmb.com/event/iiz0i110ae4'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生就业与职业发展协会SCDA主会', wishes: [''], link: 'http://zwlo110fca0.51bmb.com/event/zwlo110fca0', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学市场营销协会', wishes: [''], link: 'http://www.diaochapai.com/survey/15e67b4c-6042-4ea2-98ed-a3571236075d', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生人力资源管理学会', wishes: [''], link: 'https://pan.baidu.com/s/1cwuILo', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生博雅国学社', wishes: ['qq群:484482497'], link: '#', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生节能减排协会', wishes: [''], link: 'https://www.wenjuan.com/s/3MZBRb/', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学澜天社', wishes: [''], link: 'https://form.mikecrm.com/fPnwVO', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生心理健康协会', wishes: [''], link: 'http://form.mikecrm.com/JfP9Ps', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生国防协会', wishes: [''], link: 'https://sojump.com/m/9720840.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生礼仪与形象管理协会', wishes: [''], link: 'http://form.mikecrm.com/9IwfIG', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学食品科技协会', wishes: [''], link: 'https://www.sojump.hk/m/9556521.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学营养与健康协会', wishes: [''], link: 'https://pan.baidu.com/s/1nvB7BmD', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生外语协会', wishes: [''], link: 'http://form.mikecrm.com/7t5Q7H', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学中特会', wishes: [''], link: 'https://jinshuju.net/f/O3zE5A', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生交谊舞协会', wishes: [''], link: 'http://form.mikecrm.com/WSaZPS', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学摩登舞队', wishes: [''], link: 'https://ks.sojump.hk/m/9699165.aspx', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学体育舞蹈协会', wishes: [''], link: 'https://yun.baidu.com/share/link?shareid=1875642253&uk=3764742697', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生法学研究会', wishes: [''], link: 'http://form.mikecrm.com/apxXiq', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学集邮协会', wishes: [''], link: 'http://form.mikecrm.com/n6JIio', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学学生健美操协会', wishes: [''], link: 'https://box.zjuqsc.com/-jianmeicao', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学DATA', wishes: ['密码：4ej1'], link: 'http://pan.baidu.com/s/1eR2c61G', date: new Date(2016, 8, 24)},
                     {eventID: 0, name: '浙江大学机器人协会', wishes: ['干事:https://pan.baidu.com/s/1qYALAxA','会员:http://form.mikecrm.com/MTB8OY'], link: '#', date: new Date(2016, 8, 24)}
                    ];
        let itemsData = this.state.items.concat(tmp),
            items = [];
        itemsData.map((item, i) => {
            let date = new Date(item.date);
            items.push(
                <a key={i} className="event-info" href={item.link}>
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
                </a>
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