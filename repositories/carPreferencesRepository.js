const CarBrandsModel = require('../models/CarBrandsModel');
const CarModelsModel = require('../models/CarModelsModel');
const CarVarientsModel = require('../models/CarVarientsModel');
const CarPreferencesModel = require('../models/CarPreferencesModel');


exports.list = async function() { 
    return new Promise((resolve,reject)=>{
        CarPreferencesModel.find()
        .populate('user')
        .populate({
            path:'carvarients'
        })
        .exec((err,docs)=>{
            if (err) {
                console.log(err)
                reject(err)
            }
            let options = {
                path: 'carvarients.carmodels',
                model: 'carmodels'
            };
            CarVarientsModel.populate(docs, options, function (err, docs2) {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                let options = {
                    path: 'carvarients.carmodels.carbrands',
                    model: 'carbrands'
                };
                CarVarientsModel.populate(docs, options, function (err, docs3) {
                    return resolve(docs3);
                });
                
              });
            
        });
    })
};

exports.findById = async function(Id) { 
    return new Promise((resolve,reject)=>{
        CarPreferencesModel.findOne({_id:Id})
        .populate('user')
        .populate({
            path:'carvarients'
        })
        .exec((err,docs)=>{
            if (err) {
                console.log(err)
                reject(err)
            }
            let options = {
                path: 'carvarients.carmodels',
                model: 'carmodels'
            };
            CarVarientsModel.populate(docs, options, function (err, docs2) {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                let options = {
                    path: 'carvarients.carmodels.carbrands',
                    model: 'carbrands'
                };
                CarVarientsModel.populate(docs, options, function (err, docs3) {
                    return resolve(docs3);
                });
                
              });
            
        });
    })
};

exports.findByUserId = async function(Id) { 
    return new Promise((resolve,reject)=>{
        CarPreferencesModel.findOne({user:Id})
        .populate('user')
        .populate({
            path:'carvarients'
        })
        .exec((err,docs)=>{
            if (err) {
                console.log(err)
                reject(err)
            }
            let options = {
                path: 'carvarients.carmodels',
                model: 'carmodels'
            };
            CarVarientsModel.populate(docs, options, function (err, docs2) {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                let options = {
                    path: 'carvarients.carmodels.carbrands',
                    model: 'carbrands'
                };
                CarVarientsModel.populate(docs, options, function (err, docs3) {
                    return resolve(docs3);
                });
                
              });
            
        });
    })
};





