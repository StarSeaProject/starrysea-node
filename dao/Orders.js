const mongoose = require("mongoose");
mongoose.connect(require("../config").database);
const schema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    num: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    province: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        require: true
    },
    expressnum: {
        type: String,
        require: true
    },
    time: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    remark: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    detail: [{
        workType: {
            type: Number,
            require: true
        }
    }]
});
module.exports = mongoose.model("Orders", schema);