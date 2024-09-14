const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//  /person removed and / only presents
router.post('/', async (req, res) => {
    try{
        const data = req.body //assuming the request body conatins the person data

        //create a new person documnet using the mongoose model
        const newPerson = new person(data);

        //save the new person data to the database
        const response = await newPerson.save();
        console.log('data saved succesfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Sever Errror'});
    }
});
router.get('/', async (req, res) =>{
   try{
       const data = await person.find();
       console.log('data fetched succesfully');
       res.status(200).json(data);
   }
   catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error baba'});
   }
})

router.put('/:id', async (req, res) =>{
    try{
        const persondId = req.params.id;
        const updateperson = req.body;

        const response = await person.findByIdAndUpdate(persondId, updateperson, {
            new:true, //return the updated document
            runValidators: true, // run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'person not found baba'});
        }
        console.log('data updated');
        res.status(200).json(response);
}catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
}
})
router.delete('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data deleted');
       res.status(200).json(response);
    }catch(err){
                console.log(err);
                res.status(500).json({error:'internal sever errorrrrr'});
    }
})
module.exports = router;