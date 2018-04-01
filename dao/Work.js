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
    uploadTime: {
        type: String,
        require: true
    },
    pdfPath: {
        type: String,
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
    click: {
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
    types: [{
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        stock: {
            type: Number,
            require: true
        }
    }]
});
module.exports = mongoose.model("Work", schema);