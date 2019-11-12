const express = require('express');
const mongoose =require('mongoose');
const app =express();
const cors= require('cors');
const route = require('./routes/route');
const config = require('./config/database');
const passport=require('passport');

const port =3000;
//connect to database
mongoose.connect(config.database,{ useNewUrlParser:true });

//connection on
mongoose.connection.on("connected",()=>{
    console.log("connected to database");
});
mongoose.connection.on("error",(error)=>{
    console.log("database error",+error);
});
mongoose.connection.on("disconnected",()=>{
    console.log(" database disconnected")
})
//passport middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

 app.use(cors());
 // fr middleware
 
 app.use(express.json());
 // fr implementing routes
  app.use('/api',route);
  //check route is woking or not

  app.get('/',(req,res)=>{
      res.send('heloo');
  });
  app.listen(port,()=>{
      console.log("server starts at",port);
  });

