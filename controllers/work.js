const express = require("express");
const work = express.Router();
work.get("/", (req, res) => {

});
work.post("/ajax", (req, res) => {

});
work.get("/:workId", (req, res) => {

});
work.post("/detail/ajax", (req, res) => {

});
work.post("/add", (req, res) => {

});
work.post("/remove", (req, res) => {

});
work.post("/worktype/remove", (req, res) => {

});
work.post("/worktype/modifystock", (req, res) => {

});
module.exports=work;