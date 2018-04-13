const express = require("express");
const activity = express.Router();
const multer = require("multer");
const upload = multer({ dest: "D:\develop\nginx-1.12.1\img" });
const activityService = require("../services/activity");
const Condition = require("../common/Condition");
const Activity = require("../dto/Activity");
activity.get("/", (req, res) => {
    activityService.queryAllActivityService(new Condition().resolveFromReq(req), Activity.resolveFromReq(req), (err, sr) => {
        if (err) {
            res.status(500).render("error");
        }
        res.render("all_activity", sr);
    });
});
activity.post("/ajax", (req, res) => {

});
activity.get("/:activityId", (req, res) => {
    let activity = new Activity();
    activity.setActivityId(req.params.activityId);
    activityService.queryActivityService(activity, (err, sr) => {
        if (err) {
            res.status(500).render("error");
        }
        res.render("activity_detail", sr);
    })
});
activity.post("/detail/ajax", (req, res) => {

});
activity.post("/add",upload.single("coverFile"), (req, res) => {

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