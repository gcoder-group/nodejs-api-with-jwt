const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');


// login api
exports.login = function(req, res) { 
    let email = req.body.email;
    let password = req.body.password;
    
    email = email.trim().toLowerCase();

    const user = {name:email};
    const accessToken = generateAccessToken(user);
    const resfreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    req.user.refreshToken = resfreshToken;
    req.user.save((err,doc)=>{
        return res.json({accessToken:accessToken,resfreshToken:resfreshToken});
    })
};

exports.refresh_token = async function(req, res) { 
    const resfreshToken = req.body.resfreshToken;
    if(resfreshToken == null) return res.sendStatus(401)
    let is_refresh_token_exist = await userRepository.is_refresh_token_exist(resfreshToken);
    // console.log(is_refresh_token_exist)
    if(!is_refresh_token_exist) return res.sendStatus(403)

    jwt.verify(resfreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) {
            //console.log(err)
            return res.json({status:403,message:JSON.stringify(err)})
        }
        const accessToken = generateAccessToken({name:user.name});
        return res.json({status:200,accessToken:accessToken})
    });
};

function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'600h'})
}



