const express=require('express');   //Framework express
const { default: mongoose } = require("mongoose");  //Send functions from express to run the app
const app=express();
require('dotenv').config();   //use config variables from .env
const port=process.env.PORT;  //port connection
const routerApi = require('./src/routes');


   //connect with a default port or with asigned port
app.listen(port, ()=>console.log('using port ',port));  //enable app port

mongoose    /* connection with DB */
  .connect(process.env.MONGODB_STRING_CONNECTION)   //enviroment function connection
  .then(() => console.log("success connect with mongoDB"))    //connection validate
  .catch((error) => console.log(error));    //generated errors
  
app.use(express.json());    // Json format response
routerApi(app);
