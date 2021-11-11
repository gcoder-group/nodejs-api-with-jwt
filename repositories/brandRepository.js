const CarBrandsModel = require('../models/CarBrandsModel');
const CarModelsModel = require('../models/CarModelsModel');
const CarVarientsModel = require('../models/CarVarientsModel');


exports.list = async function() { 
    return new Promise((resolve,reject)=>{
        CarBrandsModel.find({},(err,docs)=>{
            return resolve(docs);
        })
    })
};

exports.list_model = async function() { 
    return new Promise((resolve,reject)=>{
        CarModelsModel.find()
        .populate('carbrands').exec((err,docs)=>{
            
            return resolve(docs);
        })
    })
};

exports.list_varients = async function() { 
    return new Promise((resolve,reject)=>{
        CarVarientsModel.find()
        .populate({
            path:'carmodels'
        }).exec((err,docs)=>{
            if (err) return res.json(500);
            var options = {
                path: 'carmodels.carbrands',
                model: 'carbrands'
            };
            CarVarientsModel.populate(docs, options, function (err, docs2) {
                
                return resolve(docs2);
              });
            
        })
    })
};

