const express = require("express");
const order = express.Router();
order.post("/", (req, res) => {

});
order.get("/:orderNum", (req, res) => {

});
order.post("/detail/ajax", (req, res) => {

});
order.post("/toAddOrder", (req, res) => {

});
order.post("/add", (req, res) => {

});
order.post("/modify/:orderId", (req, res) => {

});
order.post("/remove/:orderId", (req, res) => {

});
order.get("/export", (req, res) => {

});
order.post("/resend", (req, res) => {

});
order.post("/car/add", (req, res) => {

});
order.post("/car/remove/:index", (req, res) => {

});
order.get("/car", (req, res) => {

});
order.post("/car/removes", (req, res) => {

});
order.post("/address/modify", (req, res) => {

});
order.get("/address/toModifyAddr/:orderNum", (req, res) => {

});
order.post("/address/send", (req, res) => {

});
module.exports=order;