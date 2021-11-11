
const CarVarientsModel = require('../models/CarVarientsModel')
const mongoose = require('mongoose')

const db_config = require('../config/database')
db_config.connection()

let MARUTI_Model1_ID = mongoose.Types.ObjectId('61800ec03e6b834ac5dc0040');
let HONDA_Model1_ID = mongoose.Types.ObjectId('61800ec03e6b834ac5dc0041');
let TOYOTA_Model1_ID = mongoose.Types.ObjectId('61800ec03e6b834ac5dc0042');

let brands = [
    new CarVarientsModel({"name": "MARUTI_MODEL1_Varient1",'carmodels':MARUTI_Model1_ID}),
    new CarVarientsModel({"name": "MARUTI_MODEL1_Varient2",'carmodels':MARUTI_Model1_ID}),

    new CarVarientsModel({"name": "HONDA_MODEL1_Varient1",'carmodels':HONDA_Model1_ID}),
    new CarVarientsModel({"name": "HONDA_MODEL1_Varient2",'carmodels':HONDA_Model1_ID}),

    new CarVarientsModel({"name": "TOYOTA_MODEL1_Varient2",'carmodels':TOYOTA_Model1_ID}),
    new CarVarientsModel({"name": "TOYOTA_MODEL1_Varient2",'carmodels':TOYOTA_Model1_ID}),
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


