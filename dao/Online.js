const mongoose=require("mongoose");
mongoose.connect(require("../config").database);
const schema=mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    }
});
module.exports=mongoose.model("Online",schema);