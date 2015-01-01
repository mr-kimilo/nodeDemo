var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    userName:String,
    password:String,
    email:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('user',userSchema);
module.exports.Schema =function(moduleName){
  return{model:mongoose.model(moduleName)};
};