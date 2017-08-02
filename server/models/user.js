let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "please enter your first name"]
    },
    lastName:{
        type:String,
        required:[true,"please enter your last name"]
    },
    alias:{
        type:String,
        required:[true,"please enter an alias"],
        unique: true; 
    },
    
    address:{
        type: String,
        required:[true, "please enter your address"]
    },
    city:{
        type: String,
        required:[true,"please enter your city"],
    },
    state:{
        type:String,
        required:[true, "please enter state"],
        max: [2, "please enter state abbreviation"]
    },
    zip:{
        type:Number,
        required:[true, "please enter zip code"],
        min:[5, "please enter full zip code "], 
    },
    bio: {
        type: String,
        required:[true, "please tell us a bit about yourself"],
        max: [140, "ooops you've exeeded the limigt"],
    },
    email: 
    
})