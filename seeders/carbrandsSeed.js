
const CarBrandsModel = require('../models/CarBrandsModel')
const mongoose = require('mongoose')

const db_config = require('../config/database')
db_config.connection()


let brands = [
    new CarBrandsModel({"name": "MARUTI",}),
    new CarBrandsModel({"name": "HONDA",}),
    new CarBrandsModel({"name": "TOYOTA",}),
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


