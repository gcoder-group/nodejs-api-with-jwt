var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {
		type : String,
		required: true,
	},
	username:{
		type : String,
		required: true,
		unique: false, //before true
	},
	email: {
		type : String,
		required: true,
		unique: true,
	},
	password: {
		type : String,
		required: true,
	},
	mobile: {
		type : String,
		default: null	
	},
	address: {
		type : String,
		default: null,
	},
    refreshToken: {
		type : String,
		default: null,
	},
	created_at: {
		type : Date,
		default: Date.now,
	},
});

userSchema.methods.encryptPassword = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password,this.password);

}

module.exports = mongoose.model('User',userSchema)



