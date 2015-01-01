exports.setRequestUrl=function(app){
    var user=require('./routes/users');
    var index=require('./routes/index');
    var server=require('./routes/server');
    app.use('/',index);
    app.post('/example/loginSave',user.saveLoginForm);
    app.post('/example/ajaxSave',user.saveAjax);
};