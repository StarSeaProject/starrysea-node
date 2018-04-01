const express = require("express");
const root = express.Router();
root.all("/", (req, res) => {

});
root.all("/admin", (req, res) => {

});
root.all("/uploads", (req, res) => {

});
module.exports=root;