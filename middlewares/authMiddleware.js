const jwt = require('jsonwebtoken');
const dontenv = require('dotenv')
const userRepository = require('../repositories/userRepository');

dontenv.config()

exports.authenticate = function(req, res,next) { 
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // console.log("ok")
    if(token == null) return res.json({status:401,message:"Token empty!"})
    //console.log(token,process.env.ACCESS_TOKEN_SECRET)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        // console.log(err,user)
        if(err) {
            // console.log(err)
            return res.sendStatus(403)
        }
        userRepository.get_user_by_email(user.name).then((user)=>{
            if(!user){
                return res.json({status:403,message:"Token expire!"})
            }
            req.user = user
            next()
        })
        
    })
};
