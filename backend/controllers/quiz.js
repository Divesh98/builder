// const Question = require('../models/question')
// const Option = require('../models/Option');

// module.exports ={
//     addQuestions : async (req,res)=>{
//         try{
//             console.log("question works");
//             const question = new Question({
//                 question_name:req.body.question_name
//             });
//             console.log("question ",question);
//             const result = await question.save();
//             let optLength = req.body.Options.length;
//             for(let i=0; i < optLength;i++){
//                 console.log("question");
//                 const option =new Option({
//                     option_name:req.body.Options[i].option_name,
//                     answer:req.body.Options[i].answer,
//                     Question:result._id
//                 });
//                 const result2 = await option.save();
//                   result3 = await Question.findByIdAndUpdate({
//                     _id:result._id

//                 },{
//                     $push:{
//                         Options:result2._id
//                     }
//                 });
//             }
//             console.log("add question works");
//             result3 ? res.status(200).send({
//                 message:'question are saved',
//                 res:result
//             }):
//             res.status(422).send({
//                 message:"questions are not saved"
//             });


//         }
//         catch(err){
//             console.log("error",err);
//             res.send(err);
//         }


//     }

// }
const Question = require('../models/question');
const Option =require('../models/option');
const Chat = require('../models/chat');
const chatOption =require('../models/chatoption');

module.exports={


    addQuestion:async(req,res)=>{
        try {
            const question= new Question({
              Type:req.body.Type,
                question_name:req.body.question_name,
                isAnswer:req.body.isAnswer,
                submit_name:req.body.submit_name,
                isAnswer1:req.body.isAnswer1,
                url:req.body.url
            });
            console.log("question is",question);
            console.log("in body",req.body)
            const result = await question.save();
            console.log("result",result);
            let optLength = req.body.Options.length;
            for(let i=0;i<optLength;i++){
                const option =new Option({
                    option_name:req.body.Options[i].option_name,
                    Question:result._id
                });
                console.log("option is",option);
                const result2= await option.save();
                console.log("result2",result2);
                result3 = await Question.findByIdAndUpdate({
                    _id: result._id
                
                    
                  },
               {
                    $push: {
                      Options: result2._id
                    }
                    
                  });
                  console.log("_id",result._id);
                  console.log("Options",result2._id);
                }
                // console.log("add questions works..................");
                result3 ? res.status(200).send({
                    message: 'Questions are saved',
                    res: result
                  }) :
                  res.status(422).send({
                    message: 'Questions are not saved'
                  });
                  console.log("res",result);
                  console.log("res3",result3)
              } catch (error) {
                console.log(error);
                res.send(error);
              }
            },



            getQuestions: async (req, res) => {
    try {
      const result = await Question.find().populate('Options')
      result ?
        res.status(200).send({
          message: "Here are the questions",
          res: result
        }) :
        console.log("result",res);
        res.status(422).send({
          message: "questions are not getting",
          res: result
        })
        console.log("result",res)
    } catch (error) {
      throw error;
    }
  },
  addChat:async(req,res)=>{
    
    try{
      console.log("schema",req.body[0].field.last_name)
      let opt=req.body.length
      console.log("OPT",opt)
      for(let i=0;i<opt;i++){
        console.log("in loop",req.body[i].Type)
     
        if(req.body[i].Type==="rating_field"){
          const chat =new Chat({
            Type:req.body[i].Type,
            question_name:req.body[i].question_name,
            submit_name:req.body[i].submit_name,
            ratingAnswer:req.body[i].ratingAnswer
          });
          console.log("rating answer",req.body[i].ratingAnswer)
          const result = await chat.save();
          console.log("result in rating",result)


        }
        if(req.body[i].Type ==="first_page"){
          const chat  = new Chat({
            Type:req.body[i].Type,
            question_name:req.body[i].question_name,
            submit_name:req.body[i].submit_name,
            field:{
              first_name:req.body[0].field.first_name,
              last_name:req.body[0].field.last_name,
              location:req.body[0].field.location
            }
          });
          console.log("inbidy",req.body)
          const result = await chat.save();
          console.log("ddde",result)
        }
          if(req.body[i].Type==="text_input_field"){
          console.log("in text",req.body[i].question_name)
          const chat  = new Chat({
            Type:req.body[i].Type,
            question_name:req.body[i].question_name,
            isAnswer:req.body[i].isAnswer,
            submit_name:req.body[i].submit_name,
          });
          const result = await chat.save();
          console.log("ddde",result)
        }
         if(req.body[i].Type==="multi_select_field"){
          const chat  = new Chat({
            Type:req.body[i].Type,
            question_name:req.body[i].question_name,
            submit_name:req.body[i].submit_name,
            isAnswer1:req.body[i].isAnswer1,
          });
          const result = await chat.save();

          console.log("ddde",result)
         let optLength = req.body[i].Options.length;
          console.log("optLength",optLength); 
          for(let k=0;k<optLength;k++){
          const option = new chatOption({
            option_name:req.body[i].Options[k].option_name,
            Chat:result._id
          })
        const result2=await option.save();
        console.log("result2",result2) 
        result3=await Chat.findByIdAndUpdate({
          _id:result._id
        },
        {
          $push:{
            Options:result2._id
  
          }
        });
      }
       
        }
         if(req.body[i].Type==="single_slider"){
      const chat  = new Chat({
    Type:req.body[i].Type,
    question_name:req.body[i].question_name,
    isAnswer1:req.body[i].isAnswer1,
    submit_name:req.body[i].submit_name,
      });

      const result = await chat.save();
      
      console.log("ddde",result)
      let optLength = req.body[i].Options.length;
      console.log("optLength1",optLength); 
      for(let k=0;k<optLength;k++){
      const option = new chatOption({
        option_name:req.body[i].Options[k].option_name,
        Chat:result._id
      })
    const result2=await option.save();
    result3=await Chat.findByIdAndUpdate({
      _id:result._id
    },
    {
      $push:{
        Options:result2._id

      }
    });
   
  }
      result3 ? res.status(200).send({
        message:'chat questions are saved',
        res:result
      }):
      res.status(422).send({
        message:'chat questions are not  saved'
      });
      console.log("res",result);
      console.log("res3",result3)
    }
    }
    }catch(error){
      console.log("error",error)
      res.send(error);
    }
  },
  getChat:async(req,res)=>{
    try{
      const result = await Chat.find().populate('Options');
      result ?res.status(200).send({
        message:'here the chat questions',
        res:result
      }):
      console.log("result",res);
      res.status(422).send({
        message:"not getting",
        res:result
      });
    }catch(error){
      console.log('error',error)
      throw(error);
    }
  }
}


