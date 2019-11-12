// const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// const QuestionSchema = mongoose.Schema({
//     question_name:{
//         type:String
        
//     },
//     Options:[{
//         type:Schema.Types.ObjectId,
//         ref:'Option'
//     }]

   
// });
// const Question =module.exports=mongoose.model('Question',QuestionSchema);
const mongoose = require('mongoose');
var Schema =mongoose.Schema;
const QuestionSchema =mongoose.Schema({
    Type:{
        type:String
    },
    question_name:{
        type:String,
      
    },
    isAnswer:{
        type:String
    },
    isAnswer1:[{
        type:String,
       
    }],
    submit_name:{
        type:String

    },
    url:{
        type:String
    },
   
    Options:[{
        type:Schema.Types.ObjectId,
        ref:'Option'
    }]

});
const Question = module.exports =mongoose.model("Question",QuestionSchema);