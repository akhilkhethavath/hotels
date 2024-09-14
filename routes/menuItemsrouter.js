const express = require('express');
const router = express.Router();

const menuItems = require('./../models/menuItems');



// router.get('/', async (req, res) =>{
//     res.send("menuitems kavala nayana")
// })

router.post('/', async (req, res) =>{
    try{
        const data1 = req.body

        const newmenuItems = new menuItems(data1);

        const response1 = await newmenuItems.save();
        console.log('menu items data stored');
        res.status(200).json(response1);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})



router.get('/', async (req, res) =>{
    try{
        const data1 = await menuItems.find();
        res.status(200).json(data1);
    }
    catch(err){
          console.log(err);
          res.status(500).json({error:'internal server gadbad hogaya'});
    }
})

module.exports = router;