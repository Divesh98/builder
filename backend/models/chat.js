const mongoose = require('mongoose');
var Schema=mongoose.Schema;
const ChatSchema =mongoose.Schema({
    Type:{
        type:String
    },
    field:{
            first_name:String,
            last_name:String,
            location:String
        },
    question_name:{
        type:String
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
    ratingAnswer:{
        type:String
    },
    Options:[{
        type:Schema.Types.ObjectId,
        ref:'chatOption'

    }]
    
});
const Chat= module.exports =mongoose.model("Chat",ChatSchema);