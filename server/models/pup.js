let mongoose = require('mongoose');

let PupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please provide the pups name'],
        max:[30, 'name cannot exceed 30 charachters']
    },
    breed:{
        type:String,
        required:[true, 'please provide pups breed'],
        max:[20, 'name of breed cannot exceed 20 charachters']
    },
    age:{
        type: String,
        required:[true, 'please provide age of pup']
    },
    goodkids:{
        type:Boolean,
    },
    gooddogs:{
        type:Boolean,
    },
    goodcats:{
        type:Boolean,
    },
    agency:{
        type:String,
    }
}, {timestamps:true})

mongoose.model("Pup", PupSchema)