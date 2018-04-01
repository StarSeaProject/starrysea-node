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
    city: [{
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        area: [{
            id: {
                type: Number,
                require: true
            },
            name: {
                type: String,
                require: true
            }
        }]
    }]
});
module.exports = mongoose.model("Province", schema);