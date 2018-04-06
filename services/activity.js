const Activity = require("../dao/Activity");
const ServiceResult = require("../common/ServiceResult");
const CONST = require("../common/Const").ACTIVITY;
const async = require("async");
let activityService = {
    queryAllActivityService: (condition, activity, controller_callback) => {
        const { page } = condition;
        let start = 0;
        if (page == 1) {
            start = 1;
        } else {
            start = (page - 1) * CONST.ALL_ACTIVITY_LIMIT;
        }
        const getNewestActivityDao = (callback) => {
            let sr = new ServiceResult();
            Activity.findOne({}).limit(1).sort({ "endtime": -1 }).exec(["id", "name", "cover", "summary", "endtime"], (err, result) => {
                if (err) {
                    sr.setSuccessed(false);
                } else {
                    sr.setResult("ACTIVITY", result);
                }
                callback(err, sr);
            });
        };
        const getAllActivityDao = (sr, callback) => {
            Activity.find({}).skip(start).limit(CONST.ALL_ACTIVITY_LIMIT).exec(["id", "name", "cover", "summary", "endtime"], (err, result) => {
                if (err) {
                    sr.setSuccessed(false);
                } else {
                    let totalPage = 0;
                    let count = result.length;
                    if (count % CONST.ALL_ACTIVITY_LIMIT === 0)
                        totalPage = count / CONST.ALL_ACTIVITY_LIMIT;
                    else
                        totalPage = (count / CONST.ALL_ACTIVITY_LIMIT) + 1;
                    sr.setSuccessed(true);
                    sr.setResult("LIST_1", result);
                    sr.setNowPage(page);
                    sr.setTotalPage(totalPage);
                }
                callback(err, sr);
            });
        };
        async.waterfall([getNewestActivityDao, getAllActivityDao], (err, sr) => {
            controller_callback(sr);
        });
    },
    queryActivityService: (activity, callback) => {
        const {id}=activity;
        Activity.findOne({id:id}).exec(["name",""])
    },
    addActivityService: (coverFile, activity, activityImages, callback) => {

    },
    modifyActivityService: (activity, callback) => {

    },
    removeActivityService: (activity, callback) => {

    },
    addFundingService: (fundings, callback) => {

    },
    removeFundingService: (funding, callback) => {

    }
}
module.exports = activityService;