var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CarVarientsSchema = new Schema({
	name: {
		type : String,
		required: true,
		unique: true,
	},
	carmodels: {
        type: Schema.Types.ObjectId,
        ref: 'carmodels',
        required: true
    },
	created_at: {
		type : Date,
		default: Date.now,
	},
});



module.exports = mongoose.model('carvarient',CarVarientsSchema)



