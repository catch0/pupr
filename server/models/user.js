let mongoose = require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


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
        unique: [true, "looks like that alias is taken lets try another one"]; 
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
    email: {
        type: String,
        required:[true, "please enter your email"],
        unique: [true, 'Email is already registered'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    admin:{
        type:Boolean,
        required:[false],
    }
    
    
})