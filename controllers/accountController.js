const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const brandRepository = require('../repositories/brandRepository');


// login api
exports.brands = function(req, res) { 
    brandRepository.list().then((list)=>{
        resp = {
            status : 200,
            data : list
        }
        return res.json(resp)
    })
};

exports.models = function(req, res) { 
    brandRepository.list_model().then((list)=>{
        resp = {
            status : 200,
            data : list
        }
        return res.json(resp)
    })
};

exports.varients = function(req, res) { 
    brandRepository.list_varients().then((list)=>{
        resp = {
            status : 200,
            data : list
        }
        return res.json(resp)
    })
};


