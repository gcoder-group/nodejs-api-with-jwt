const User = require('../models/userModel');
const CarPreferencesModel = require('../models/CarPreferencesModel');
const carPreferencesRepository = require('../repositories/carPreferencesRepository');
const mongoose = require('mongoose')


exports.index = async function(req, res,next) {
    records_list = await carPreferencesRepository.list();
    let resp = {
        status : 200,
        data : records_list
    }

    return res.json(resp)
	
};

exports.store = function(req, res) {
    var newCarPreferencesModel = new CarPreferencesModel()
	newCarPreferencesModel.user = mongoose.Types.ObjectId(req.body.user);
	newCarPreferencesModel.carvarients = mongoose.Types.ObjectId(req.body.carvarients);

    newCarPreferencesModel.save((err,doc)=>{
        if(err) {
            let resp = {
                status: 500,
                message : JSON.stringify(err)
            }
            return res.json(resp)
        }
        let resp = {
            status: 200,
            message : 'Record added successfully!'
        }
        return res.json(resp)
    })

};


exports.edit = function(req, res) {
    var id = req.params.id
    
    carPreferencesRepository.findById(id).then(record=>{
        let resp = {
            status:200,
            data:record,
        }
        return res.json(resp)
    })
};

exports.editByUserId = function(req, res) {
    var id = req.params.id
    
    carPreferencesRepository.findByUserId(id).then(record=>{
        let resp = {
            status:200,
            data:record,
        }
        return res.json(resp)
    })
};

exports.update = function(req, res,next) {
    
    

	var id = req.params.id
	var query = {'_id':id};
	var update = { 
		user: req.body.user,
		carvarients: req.body.carvarients,
		updated_at: Date.now(),
	};
	CarPreferencesModel.findOneAndUpdate(query, update, {upsert:true}, function(err, doc){
	    if (err) {
            let resp = {
                status : 500,
                message: JSON.stringify(err)
            }
	    	return res.json(resp);
	    };
        let resp = {
            status : 200,
            message: 'Record updated successfully!',
        }
        return res.json(resp)
	 })

};


exports.destroy = function(req, res,next) {
    var id =  req.params.id

	CarPreferencesModel.findByIdAndRemove(id,(errors,result)=>{
    	if(errors){
			let resp = {
                status : 500,
                message: JSON.stringify(err)
            }
	    	return res.json(resp);
			
		}

		let resp = {
            status : 200,
            message: 'Record Deleted successfully!'
        }
        return res.json(resp);
    })
};
