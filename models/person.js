const mongoose = require('mongoose');

//define the erson schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type:Number
    },
    work: {
        type:String,
        // enum: ['chef','worker','manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        reuired: true
    },
    salary:{
        type: Number,
        required: true
    }
});

//create person model
const person = mongoose.model('person',personSchema);
module.exports = person;