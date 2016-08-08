$.ajax({
    url: "/user/signup",
    dataType: 'json',
    type: 'POST',
    data: {
        "username": "17764519167",
        "password": "whq112131"
    },
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.ajax({
    url: "/user/login",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        username: "17764519167",
        password: "whq112131"
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.ajax({
    url: "/profile",
    dataType: 'json',
    type: 'POST',
    data: {
        "name": "吴昊潜",
        "sex": "男",
        "origin": "浙江金华",
        "nation": "汉族",
        "schoolID": "3140102349",
        "politicalStatus": "预备党员",
        "telnumber": "17764519167",
        "telshort": null,
        "email": "woolsey@zju.edu.cn",
        "qq": "493531793",
        "majior": "计算机科学与技术专业",
        "birth": "19960914",
        "address": "碧二315"
    },
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
        console.log(err);
    }.bind(this)
});

$.ajax({
    url: "/org/signup",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        username: "woolsey@zju.edu.cn",
        tel: "18858920669",
        name: "蛋壳工作室",
        bossname: "吴昊潜",
        password: "danke112131"
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});


$.ajax({
    url: "/org/login",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        username: "woolsey@zju.edu.cn",
        password: "danke112131"
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});


$.ajax({
    url: "/event/create",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        event: {
            name: "蛋壳工作室纳新",
            eventID: 1,
            formschema: {
                skills: {
                    delete: false,
                    title: "技能/特长",
                    max: null,
                    option: ["nodejs", "react", "产品设计", "用户调研", "UI设计", "文案"],
                    free: true
                },
                introduction: {
                    delete: false,
                    title: '个人履历',
                    required: true
                },
                wish: {
                    delete: false,
                    title: "部门选择",
                    max: 2,
                    option: ["产品", "设计", "前端", "后端", "运营"],
                    free: false
                },
                others: [{
                    type: "single-text",
                    title: "说出你的梦想",
                    required: true
                }, {
                    type: "multi-text",
                    title: "说出你的梦想",
                    required: true
                }, {
                    type: "multi-choose",
                    title: "你有几个女朋友",
                    max: null,
                    option: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    free: true
                }, {
                    type: "single-choose",
                    title: "你有几个女朋友",
                    max: null,
                    option: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    free: true
                }]
            }
        }
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.ajax({
    url: "/form/submit",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        eventID: 1,
        wish: {
            title: 'wish',
            chosen: ['产品']
        },
        skills: ['PPT', 'node', 'react'],
        baseinfo: {
            "name": "吴昊潜",
            sex: "男",
            origin: "浙江金华",
            nation: "汉族",
            schoolID: "3140102349",
            politicalStatus: "预备党员",
            telnumber: "17764519167",
            telshort: null,
            email: "woolsey@zju.edu.cn",
            qq: "493531793",
            major: "计算机科学与技术专业",
            birth: "19960914",
            address: "碧二315"
        },
        other: [{
            "type": "single-text",
            "title": "你好吗",
            "content": "I`m fine, thank you"
        }]
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.get('/form?name=吴昊潜&telnumber=17764519167&eventID=1&order=-1&page=1&wish=产品', function(data) {
    console.log(data);
})

$.post('/interview/create', {
    eventID: 1,
    round: 1,
    department: '产品'
}, function(data) {
    console.log(data);
})

$.post('/event/delete', {
    eventID: 1,
}, function(data) {
    console.log(data);
})

$.get('/interview?eventID=1&department=产品&round=1', function(data) {
    console.log(data);
})

$.post('/interview/delete', {
    eventID: 1,
    round: 1,
    department: '产品'
}, function(data) {
    console.log(data);
})

$.ajax({
    url: "/interview/arrangement/create",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        arrangements: [{
            duration: 30 * 60 * 1000,
            startTime: new Date(),
            place: '小剧场',
            interval: 15 * 60 * 1000,
            total: 50
        }],
        interviewID: "57a6f5192901315060e87dbd"
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.post('/interview/arrangement/delete', {
    interviewID: "579e1cdbb115fe4441cb0ed8",
    arrangementID: "579e1d65b115fe4441cb0eda"
}, function(data) {
    console.log(data);
})

$.ajax({
    url: "/interview/interviewer/update",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        interviewers: [{
            telnumber: '17764519167',
            state: '通过',
            arrangementID: "579e1d65b115fe4441cb0eda"
        }],
        interviewID: "579e1cdbb115fe4441cb0ed8"
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.ajax({
    url: "/message/create",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        message: {
            orgID: '57965122455f5a582ffa823a',
            department: '产品',
            date: new Date(),
            telnumber: ['17764519167'],
            text: 'This is test message.',
            cost: 0.5
        }
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});