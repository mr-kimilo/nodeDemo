var config=require('../config');
var userDBModel=require('../models/user');
var utils=require('../utils/mangoUtils');
var user=userDBModel.Schema('user').model;
exports.saveLoginForm=function(req,res,next){
    var userEntity=new user();
    userEntity.userName=req.body.username;
    userEntity.password=req.body.password;
    userEntity.email=req.body.email;
    userEntity.create_date=new Date();
    console.log(userEntity);
    userEntity.save(function(error,userInfo){
        if(error) throw error;
        else{
            console.log("userInfo:"+userInfo)
        }

    });
    res.render("index.html");
};
exports.saveAjax=function(req,res,next){
    console.log("ajax method");
    res.end(null)
};