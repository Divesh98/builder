const express = require('express');
const router =express();
const config =require('../config/database');
const User = require('../models/user');
const jwt=require('jsonwebtoken');
const quiz =require('../controllers/quiz')


//signup
router.post('/signup',(req,res,next)=>{
    let newUser =new User({ 
      username:req.body.username, 
     email:req.body.email,
    password:req.body.password
 });
 User.addUser(newUser,(err,data)=>{
     if(err){ newUser.save(callback);
         res.json({success:false,msg:'fail to register'+err});
     }
     else{
        const token=jwt.sign(newUser.toJSON(),config.secret,{
            expiresIn: 604800 //1 week 
        });
        res.json({
            success:true,
            token:'JWT '+ token,     
            user:{
                id:newUser._id,
                username:newUser.username,
                email:newUser.email,
            }
        });
         res.json({success:true,msg:'user registered'+data});
         
     }
 });
});


// authenticate login
  
router.post('/authenticate', (req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.getUserByEmail(email, (err, user)=>{
        if(err) throw err;

        if(!user){
            return res.json({success: false, msg:'User not found, try again'});
        }
        User.comparePassword(password, user.password,(err,isMatch)=>{
            if(err){
               throw err; 
            }  
            if(isMatch){
                
                const token=jwt.sign(user.toJSON(),config.secret,{
                    expiresIn: 604800 //1 week 
                });
                res.json({
                    success:true,
                    token:'JWT '+ token,     
                    user:{
                        id:user._id,
                        username:user.username,
                        email:user.email,
                    }
                });
                
            }
            else{
                return res.json({success:false, msg:'Wrong Password'});
            }
        });

    });
});


//add question

// router.route('/addQuestion').post(quiz.addQuestions);
router.route('/addQuestion').post(quiz.addQuestion);
router.route("/question").get(quiz.getQuestions);
router.route("/chatQuestion").post(quiz.addChat);
router.route("/getChat").get(quiz.getChat);


module.exports = router;
