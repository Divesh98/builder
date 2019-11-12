// const mongoose =require('mongoose');
// var Schema = mongoose.Schema;

// const OptionSchema = mongoose.Schema({
//     option_name:{
//         type:String,
//         required: true
        
//     },
//     answer:{
//         type:String,
//         required: true
       
//     },
//     Question:[{
//         type:Schema.Types.ObjectId,
//         ref:'Question'
//     }]
// });
// const Option =module.exports = mongoose.model('Option',OptionSchema);

const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const OptionSchema = mongoose.Schema({
    option_name:{
        type:String,
       
    },
    Question:[{
        type:Schema.Types.ObjectId,
       
    }]
});
const Option=module.exports=mongoose.model('Option',OptionSchema);