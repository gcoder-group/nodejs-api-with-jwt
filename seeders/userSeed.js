
const user_model = require('../models/userModel')
const mongoose = require('mongoose')

const db_config = require('../config/database')
db_config.connection()



let user1 = new user_model();
user1.name = 'Gourav Namdev';
user1.username= 'gouravnamdev100';
user1.email = 'gouravnamdev100@gmail.com';
user1.password = user1.encryptPassword('abc@1234');
user1.mobile= '9891226292';
user1.address= 'New Delhi';


let users = [
    user1,
]

let index = 0;
function createSeeds(){
    if(index < users.length){
        users[index].save(function(err,doc){
            // console.log(err,doc)
            index++; 
            createSeeds()
        })
    }else{
        db_config.disconnect();
    }
}
createSeeds();


