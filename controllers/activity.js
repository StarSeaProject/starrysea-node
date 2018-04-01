const express = require("express");
const activity = express.Router();
const activityService = require("../services/activity");
const Condition = require("../common/Condition");
const Activity = require("../dto/Activity");
activity.get("/", (req, res) => {
    activityService.queryAllActivityService(Condition.resolveFromReq(req), Activity.resolveFromReq(req));
    res.status(200);
    res.send("success");
});
activity.post("/ajax", (req, res) => {

});
activity.get("/:activityId", (req, res) => {

});
activity.post("/detail/ajax", (req, res) => {

});
activity.post("/add", (req, res) => {

});
activity.post("/modify", (req, res) => {

});
activity.post("/remove", (req, res) => {

});
activity.post("/funding/add", (req, res) => {

});
activity.post("/funding/remove", (req, res) => {

});
module.exports = activity;