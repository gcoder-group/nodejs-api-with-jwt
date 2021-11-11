
const CarModelsModel = require('../models/CarModelsModel')
const mongoose = require('mongoose')

const db_config = require('../config/database')
db_config.connection()

let MARUTI_ID = mongoose.Types.ObjectId('618009e8cf65dcfff41f8122');
let HONDA_ID = mongoose.Types.ObjectId('618009e8cf65dcfff41f8123');
let TOYOTA_ID = mongoose.Types.ObjectId('618009e8cf65dcfff41f8124');

let brands = [
    new CarModelsModel({"name": "MARUTI_MODEL1",'carbrands':MARUTI_ID}),
    new CarModelsModel({"name": "HONDA_MODEL1",'carbrands':HONDA_ID}),
    new CarModelsModel({"name": "TOYOTA_MODEL1",'carbrands':TOYOTA_ID}),
]

let index = 0;
function createSeeds(){
    if(index < brands.length){
        brands[index].save(function(err,doc){
            // console.log(err,doc)
            index++; 
            createSeeds()
        })
    }else{
        db_config.disconnect();
    }
}
createSeeds();


