var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CarModelsSchema = new Schema({
	name: {
		type : String,
		required: true,
		unique: true,
	},
	carbrands: {
        type: Schema.Types.ObjectId,
        ref: 'carbrands',
        required: true
    },
	created_at: {
		type : Date,
		default: Date.now,
	},
});



module.exports = mongoose.model('carmodels',CarModelsSchema)



