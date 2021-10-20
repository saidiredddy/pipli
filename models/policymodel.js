const mongoose = require('mongoose');

const policySchema = mongoose.Schema({
    policyNumber:{
        type: Number,
        required: true,
        trim : true
    },
    policyStartDate:{
        type: Date,
    },
    policyEndDate:{
        type: Date
    },
    policyCategory:{
        type: String,
    },
    collectionId:{
        type: String,
    
    },
    companyCollectionId:{
        type: String,
    },
    userId:{
        type: String
    }
})

module.exports = mongoose.model('Policy', policySchema)

