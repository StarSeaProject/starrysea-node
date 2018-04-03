class Condtion {
    constructor() {
        this.page = 1;
    }
    resolveFromReq(req) {
        let { page, timeStart, timeEnd, tokenString, orderBy, orderDir, extraInfo } = req.body;
        let condtion = new Condtion();
        condtion.page = page;
        if (condtion.page === undefined)
            condtion.page = 1;
        condtion.timeStart = timeStart;
        condtion.timeEnd = timeEnd;
        condtion.tokenString = tokenString;
        condtion.orderBy = orderBy;
        condtion.orderDir = orderDir;
        condtion.extraInfo = extraInfo;
        return condtion;
    };
    page(page) {
        this.page = page;
    }
    timeStart(timeStart) {
        this.timeStart = timeStart;
    };
    timeEnd(timeEnd) {
        this.timeEnd = timeEnd;
    };
    tokenString(tokenString) {
        this.tokenString = tokenString;
    };
    orderBy(orderBy) {
        this.orderBy = orderBy;
    };
    orderDir(orderDir) {
        this.orderDir = orderDir;
    };
    extraInfo(extraInfo) {
        this.extraInfo = extraInfo;
    };
}
module.exports = Condtion;