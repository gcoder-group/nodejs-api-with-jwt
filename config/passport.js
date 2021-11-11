const User = require('../models/userModel');


// login api
exports.login = async function(req, res,next) { 
    let email = req.body.email;
    let password = req.body.password;
    
    email = email.trim().toLowerCase();
    let where =  { email: email }
    
    User.findOne(where,(err,user)=>{
        if(err){
            let message = JSON.stringify(err);
            return res.json({status:403,message:message});
        }
        if(!user){
            let message = 'No user found!';
            return res.json({status:403,message:message});
        }
        
        // console.log()
        if(!user.validPassword(password)){
            let message = 'Wrong Password!';
            return res.json({status:403,message:message});
        }
        req.user = user;
        next();

    })

    
};