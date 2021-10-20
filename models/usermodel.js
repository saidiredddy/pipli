const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim : true
    },
    address:{
        type: String,
    },
    dob:{
        type: Date
    },
    phone:{
        type: Number,
        required: true
    },
    state:{
        type: String,
        required: true,
        trim : true
    },
    email:{
        type: String,
        required: true,
        trim : true
    },
    zip:{
        type: Number,
        required: true,
        trim : true
    },
    gender:{
        type: String,
        enum:["Male", "Female"]
    },
    userType:{
        type:String
    }
})

module.exports = mongoose.model('User', userSchema)

