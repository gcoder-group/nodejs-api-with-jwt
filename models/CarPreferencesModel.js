var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CarPreferencesSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
	},
	carvarients: {
        type: Schema.Types.ObjectId,
        ref: 'carvarient',
        required: true
    },
	created_at: {
		type : Date,
		default: Date.now,
	},
	updated_at: {
		type : Date,
		default: null,
	},
});



module.exports = mongoose.model('carpreferences',CarPreferencesSchema)



