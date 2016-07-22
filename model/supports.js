/**
 * Created by admin on 2016/7/20.
 */
var modelIDs = require('./bd/modelids');

module.exports = {
    grantUser: function(req,res,next){
        if(req.session.user){
            next();
        }
        else{
            res.json({
                code: 403,
                msg: '未登录！',
                body:{}
            });
        }
    },
    grantOrganization: function(req,res,next){
        if(req.session.organization){
            next();
        }
        else{
            res.json({
                code: 403,
                msg: '未登录！',
                body:{}
            });
        }
    },
    formFilter: function(req){

        var baseinfo = baseinfoFilter(req.body.baseinfo);

        var others = otherFilter(req.body.others);

        return {
            eventID: req.eventID,
            writetime: req.writetime,
            browserinfo: req.browserinfo,
            baseinfo: baseinfo,
            skills: req.skills,
            introduction: req.introduction,
            wish: req.wish,
            reason: req.reason,
            others: others,
            remark: req.body.remark
        };
    },
    eventFilter: function(req,res,next){
        if(!req.body.name){
            req.body.event = false;
        }
        else{
            //生成modelIDs
            modelIDs.findOneAndUpdate({ name: 'forms' }, { $inc: { ids: 1 } }, {new: true, upsert: true}, function(err,doc){
                var eventID = doc.ids;
                var formschema = formSchemaFilter(req.body.formschema);
                req.body.event = {
                    eventID: eventID,
                    name: req.body.name,
                    formschema: formschema
                };
                next();
            });
        }
    }
};

var baseinfoFilter = function(baseinfo){
    if(!baseinfo){
       return {
            name: null,
            sex: null,
            origin: null,
            nation: null,
            schoolID: null,
            politicalStatus: null,
            telnumber: null,
            telshort: null,
            email: null,
            qq: null,
            major: null,
            birth: null,
            address: null
        };
    }else{
        return {
            name: baseinfo.name,
            sex: baseinfo.sex,
            origin: baseinfo.origin,
            nation: baseinfo.nation,
            schoolID: baseinfo.schoolID,
            politicalStatus: baseinfo.politicalStatus,
            telnumber: baseinfo.telnumber,
            telshort: baseinfo.telshort,
            email: baseinfo.email,
            qq: baseinfo.qq,
            major: baseinfo.major,
            birth: baseinfo.birth,
            address: baseinfo.address
        };
    }
};

var otherFilter = function(others){
    var result = [];
    //console.log(others);
    if(!others){
        return {};
    }
    for(var i=0; i < others.length; i++){
        var rough = others[i];
        var element = {};
        switch(rough.type){
            case 'single-text' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    content: rough.content
                    //required: tough.required
                };
                break;
            case 'multi-text' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    content: rough.content
                    //required: tough.required
                };
                break;
            case 'multi-choose' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    //max: rough.max,
                    chosen: rough.chosen
                };
                break;
            case 'single-choose' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    //max: rough.max,
                    chosen: rough.chosen
                };
                break;
            case 'file' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    url : rough.url
                };
                break;
            case 'image' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    url : rough.url
                };
                break;
            default:
                element = {};
        }
        if(element){
            result.push(element);
        }
    }
    //console.log(result);
    return result;
};

var formSchemaFilter = function(formSchema){
    var others = otherSchemaFilter(formSchema.others);

    return {
        skills: {
            delete:formSchema.skills.delete,
            title:formSchema.skills.title,
            max: formSchema.skills.max,
            option:formSchema.skills.option,
            free: formSchema.skills.free
        },
        introduction: {
            delete:formSchema.introduction.delete,
            title: formSchema.introduction.title,
            content: formSchema.introduction.content,
            require: formSchema.introduction.require
        },
        wish: {
            delete:formSchema.wish.delete,
            title:formSchema.wish.title,
            max: formSchema.wish.max,
            option:formSchema.wish.option,
            free: formSchema.wish.free
        },
        remark: formSchema.remark,
        others: others

    };
};

var otherSchemaFilter = function(others){
    var result = [];
    //console.log(others);
    if(!others){
        return {};
    }
    for(var i=0; i < others.length; i++){
        var rough = others[i];
        var element = {};
        switch(rough.type){
            case 'single-text' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    //content: rough.content
                    required: rough.required
                };
                break;
            case 'multi-text' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    //content: rough.content
                    required: rough.required
                };
                break;
            case 'multi-choose' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    max: rough.max,
                    option: rough.option,
                    free: rough.free
                };
                break;
            case 'single-choose' :
                element = {
                    type: rough.type,
                    title: rough.title,
                    option: rough.option,
                    free: rough.free
                };
                break;
            case 'file' :
                element = {
                    type: rough.type,
                    title: rough.title
                };
                break;
            case 'image' :
                element = {
                    type: rough.type,
                    title: rough.title
                };
                break;
            default:
                element = {};
        }
        if(element){
            result.push(element);
        }
    }
    //console.log(result);
    return result;
};