const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');
var Schema = mongoose.Schema();
const config = require('../config/database');
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username is required']
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,'Password is Required']
    
    }
});
const User =module.exports = mongoose.model('User',UserSchema);
module.exports.getUserById= function(id,callback){
    User.findById(id,callback); 
}

module.exports.getUserByEmail=function(email,callback){
    const query={email: email};
    User.findOne(query, callback);
}
module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err){
                console.log("error",err);
            }else{
                newUser.password=hash;
                newUser.save(callback);
            }
        });
    });
    }
    module.exports.comparePassword=function(candidatePasword, hash,callback){
        bcrypt.compare(candidatePasword, hash, (err, isMatch)=>{
            if(err)throw err;
            callback(null, isMatch);
        });
    } 