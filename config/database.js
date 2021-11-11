const mongoose = require('mongoose')
const dotenv = require('dotenv') 

dotenv.config();



module.exports = {

	connection : ()=>{
		
		db_name = 'jwtapis'
		let connection = 'mongodb://localhost:27017/'+db_name
		console.log(connection)
		mongoose.connect(connection,function(error){
		    if(error) {
		      console.log("DB connection failed");
		      console.log(error);
		    }else{
		      console.log("DB connection successful");
		    }
		    
		}).then(() => console.log('Connected to MongoDB...'))
		.catch(err => console.error('Could not connect to MongoDB...'));;

	},
    disconnect :()=>{
        mongoose.disconnect();
    }

}