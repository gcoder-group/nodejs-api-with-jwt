const User = require('../models/userModel');

exports.is_refresh_token_exist = async function(refreshToken) { 
    return new Promise((resolve,reject)=>{
        User.findOne({refreshToken:refreshToken},(err,user)=>{
            // console.log(err,user)
            if(err) return resolve(false)
            if(!user) return resolve(false)
            
            return resolve(true);
        })
    })
};

exports.get_user_by_email = async function(email) { 
    return new Promise((resolve,reject)=>{
        User.findOne({email:email},(err,user)=>{
            // console.log(email,err,user)
            if(err) return resolve(false)
            if(!user) return resolve(false)
            return resolve(true);
        })
    })
};