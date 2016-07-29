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
    url: "/form/design",
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
        name: "蛋壳工作室纳新",
        formschema: {
            skills: {
                delete: false,
                title: "技能/特长",
                max: null,
                option: ["nodejs", "react", "产品设计", "用户调研", "UI设计", "文案"],
                free: true
            },
            introduction: {
                delete: true
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
            }]
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
            chosen: ['技术']
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
        ,interview: [{
            round: 1,
            title: '一轮面试',
            department: '技术',
            time: '2016/9/1 14：00',
            state: '未面试'
        }]
    }),
    success: function(data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error("ajax请求发起失败");
    }.bind(this)
});

$.get('/form?name=吴昊潜&telnumber=17764519167&eventID=1&order=-1&page=1&wish=技术',function(data){
    console.log(data)
})