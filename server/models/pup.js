let mongoose = require('mongoose');

let PupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please provide the pups name'],
        maxlength:[30, 'name cannot exceed 30 charachters']
    },
    breed:{
        type:String,
        required:[true, 'please provide pups breed'],
        maxlength:[20, 'name of breed cannot exceed 20 charachters']
    },
    age:{
        type: Number,
        required:[true, 'please provide age of pup']
    },
    //still trying to find how to use ratings
    goodkids:{
        type:number,
        min: 1,
        max:4
    },
      //still trying to find how to use ratings
    gooddogs:{
        type:number,
        min: 1,
        max:4
    },
      //still trying to find how to use ratings
    goodcats:{
        type: number,
        min: 1,
        max:4
    },
    agency: [{ name: String, address:String, city:String, state:String, phone:Number}],
}, {timestamps:true})

mongoose.model("Pup", PupSchema)
