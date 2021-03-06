/**
 * Created by admin on 2016/7/20.
 */
var modelIDs = require('../db/modelid');

module.exports = {
    formFilter: (req) => {

        var baseinfo = baseinfoFilter(req.body.baseinfo);

        var others = otherFilter(req.body.others);

        return {
            eventID: req.body.eventID,
            writetime: req.body.writetime,
            browserinfo: req.body.browserinfo,
            baseinfo: baseinfo,
            skills: req.body.skills,
            introduction: req.body.introduction,
            wish: req.body.wish,
            reason: req.body.reason,
            others: others,
            interview: req.body.interview, 
            remark: req.body.remark
        };
    },
    eventFilter: (req,res,next) => {
        if(!req.body.event.name){
            req.body.event = false;
            next();
        }
        else{
            //生成modelIDs
            modelIDs.findOneAndUpdate({ name: 'forms' }, { $inc: { ids: 1 } }, {new: true, upsert: true}, function(err,doc){
                var eventID = doc.ids;
                req.body.event.formschema = formSchemaFilter(req.body.event.formschema);
                req.body.event.eventID = eventID;
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
            address: null,
            img: null,
            grade: null
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
            address: baseinfo.address,
            img: baseinfo.img,
            grade: baseinfo.grade
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