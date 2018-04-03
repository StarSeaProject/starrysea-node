const express = require("express");
const activity = express.Router();
const activityService = require("../services/activity");
const Condition = require("../common/Condition");
const Activity = require("../dto/Activity");
activity.get("/", (req, res) => {
    activityService.queryAllActivityService(new Condition().resolveFromReq(req), Activity.resolveFromReq(req), (sr) => {
        res.render("all_activity", sr);
    });
});
activity.post("/ajax", (req, res) => {

});
activity.get("/:activityId", (req, res) => {

});
activity.post("/detail/ajax", (req, res) => {

});
activity.post("/add", (req, res) => {

});
activity.patch("/modify", (req, res) => {

});
activity.delete("/remove", (req, res) => {

});
//@route:/funding
//@method:PATCH
activity.patch("/funding/add", (req, res) => {

});
//@routes:/funding
//@method:DELETE
activity.delete("/funding/remove", (req, res) => {

});
module.exports = activity;