const Activity = require("../dao/Activity");
const ServiceResult = require("../common/ServiceResult");
let activityService = {
    queryAllActivityService: (condition, activity, callback) => {
        const { page } = condition;
        let limit = 10;
        let start = 0;
        if (page == 1) {
            start = 1;
        } else {
            start = (page - 1) * limit;
        }
        Activity.find({}).exec(["id", "name", "cover", "summary", "endtime"], (err, docs) => {
            let sr = new ServiceResult();
            if (err) {
                sr.setSuccessed(false);
            } else {
                const result = docs.slice(start, parseInt(start) + parseInt(limit));
                let totalPage = 0;
                let count = docs.length;
                if (count % limit === 0)
                    totalPage = count / limit;
                else
                    totalPage = (count / limit) + 1;
                sr.setSuccessed(true);
                sr.setResult("ACTIVITY", docs[0]);
                sr.setResult("LIST_1", result);
                sr.setNowPage(page);
                sr.setTotalPage(totalPage);
            }
            callback(sr);
        });
    },
    queryActivityService: (activity, callback) => {

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