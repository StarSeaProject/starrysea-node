const Activity = require("../dao/Activity");
const ServiceResult = require("../common/ServiceResult");
let activityService = {
    queryAllActivityService: (condition, activity) => {
        const { page } = condition;
        var limit = 10;
        var start = 0;
        if (page == 1) {
            start = 1;
        } else {
            start = (page - 1) * limit;
        }
        let sr = new ServiceResult();
        Activity.find({}).exec(["id", "name", "cover", "summary", "endtime"], (err, docs) => {
            if (err) {
                sr.setSuccessed(false);
            } else {
                const result = docs.slice(start, parseInt(start) + parseInt(limit));
                sr.setSuccessed(true);
                sr.setResult("LIST_1", result);
            }
        });
        return sr;
    },
    queryActivityService: (activity) => {

    },
    addActivityService: (coverFile, activity, activityImages) => {

    },
    modifyActivityService: (activity) => {

    },
    removeActivityService: (activity) => {

    },
    addFundingService: (fundings) => {

    },
    removeFundingService: (funding) => {

    }
}
module.exports = activityService;