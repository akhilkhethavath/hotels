// // console.log("its running");
// // function add(a,b){
// //     return a+b;
// // }
// // let add=(a,b) =>{return a+b;}
// // let add = (a,b) => a+b;
// // let res = add(699,699);
// // console.log(res);
// // function callback(){
// //     console.log("now adding is completed");
// // }
// // let add = function(a,b,callback){
// //     let res = a+b;
// //     console.log("res:",res);
// //     callback();
// // }

// // add(5,3, () =>{
// //     console.log("work is done")
// // });

// // let fs = require('fs');
// // let os = require('os');

// // let user = os.userInfo();
// // console.log(user);
// // console.log(user.username);

// // fs.appendFile('greetings.txt','IM AKHIL OFFICIAL '+ user.username + ' !\n', ()=>{
// //     console.log("this is a callback function");
// // }) 

// // console.log(fs);

// // console.log(os);

// let notes = require('./notes');
// var _ = require('lodash');
// // console.log('this is a page in server');

// // let age = notes.age;

// // let number = notes.addNum(69,69);
// // console.log(number);
// // console.log(age);

// var data = ["akhil","balu","akhil",1,2,3,2,2,3,4,4,5,5,6,66,6,89,89,76,'akhil','89'];
// var filter = _.uniq(data);
// console.log(filter);

const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());//it stores in req.body
const PORT = process.env.PORT || 3000;

const person = require('./models/person');
const menuItems = require('./models/menuItems');
const personroutes = require('./routes/personroutes');
const menuItemsroutes = require('./routes/menuItemsrouter');


app.use('/menuItems', menuItemsroutes);

//use the routers
app.use('/person', personroutes);



app.get('/',function(req, res){
    res.send('hello akhil official')
});

app.get('/name',(req, res)=>{
    res.send('my name is akhillllll');
})

app.get('/personnel',(req, res)=>{
    res.send("mai nahi bolungaaaaa")
}) 

app.get('/biodata',(req, res)=>{
    res.send("mai nahi bolungaaaaa")
}) 




app.listen(3000, ()=>{
    console.log("its running baba");
});