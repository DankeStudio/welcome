/**
 * Created by admin on 2016/7/20.
 */

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
    formFilter: function(req){

        var baseinfo = baseinfoFilter(req.body.baseinfo);

        var others = otherFilter(req.body.other);

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
    }
};

var baseinfoFilter = function(baseinfo){
    if(!baseinfo){
        var baseinfo = {
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
            majior: null,
            birth: null,
            address: null
        };
    }

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
        majior: baseinfo.majior,
        birth: baseinfo.birth,
        address: baseinfo.address
    };
};

var otherFilter = function(other){
    var result = [];
    //console.log(other);
    if(!other){
        return {};
    }
    for(var i=0; i < other.length; i++){
        var rough = other[i];
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