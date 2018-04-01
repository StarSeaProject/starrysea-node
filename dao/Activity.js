const mongoose = require("mongoose");
mongoose.connect(require("../config").database);
const schema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        require: true
    },
    cover: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    endtime: {
        type: Date,
        require: true
    },
    money: {
        type: Number,
        require: true
    },
    images: [{
        id: {
            type: Number,
            require: true
        },
        path: {
            type: String,
            require: true
        }
    }],
    fundings: [{
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        money: {
            type: Number,
            require: true
        },
        message: {
            type: String,
            require: true
        }
    }]
});
module.exports = mongoose.model("Activity", schema);