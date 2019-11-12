const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const chatOptionSchema = mongoose.Schema({
    option_name:{
        type:String,

    },
    Chat:[{
        type:Schema.Types.ObjectId
    }]
});
const chatOption = module.exports =mongoose.model("chatOption",chatOptionSchema);