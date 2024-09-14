const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy'],
        required: true
    },
    isDrink:{
        type:Boolean,
        default: false
    },
    ingredients:{
        type:String,
        default: []
    },
    num_sales:{
        type:Number,
        default: 0
    }
})

const menuItems = mongoose.model('menuItems',menuItemsSchema)


module.exports = menuItems ;