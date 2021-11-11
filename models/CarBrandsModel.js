var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CarBrandsSchema = new Schema({
	name: {
		type : String,
		required: true,
		unique: true,
	},
	created_at: {
		type : Date,
		default: Date.now,
	},
});



module.exports = mongoose.model('carbrands',CarBrandsSchema)



