const mongoose = require("mongoose");
mongoose.connect(require("../config").database);
const schema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    createTime: {
        type: Date,
        require: true
    },
    updateTime: {
        type: Date,
        require: true
    },
    answer: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        require: true
    }
});
module.exports = mongoose.model("Question", schema);