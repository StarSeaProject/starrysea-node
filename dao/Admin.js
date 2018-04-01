const mongoose = require("mongoose");
mongoose.connect(require("../config").database);
const schema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    useraccount: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model("Admin", schema);