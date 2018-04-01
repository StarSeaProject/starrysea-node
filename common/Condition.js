class Condtion {
    constructor() {
        this.page = 1;
    }
    static resolveFromReq(req) {
        if (!req.body) {
            console.log("req没有Body");
            let condtion = new Condtion();
            return condtion;
        } else {
            let { page, timeStart, timeEnd, tokenString, orderBy, orderDir, extraInfo } = req.body;
            let condtion = new Condtion();
            condtion.page = page;
            condtion.timeStart = timeStart;
            condtion.timeEnd = timeEnd;
            condtion.tokenString = tokenString;
            condtion.orderBy = orderBy;
            condtion.orderDir = orderDir;
            condtion.extraInfo = extraInfo;
            return condition;
        }
    };
    set page(page) {
        this.page = page;
    }
    set timeStart(timeStart) {
        this.timeStart = timeStart;
    };
    set timeEnd(timeEnd) {
        this.timeEnd = timeEnd;
    };
    set tokenString(tokenString) {
        this.tokenString = tokenString;
    };
    set orderBy(orderBy) {
        this.orderBy = orderBy;
    };
    set orderDir(orderDir) {
        this.orderDir = orderDir;
    };
    set extraInfo(extraInfo) {
        this.extraInfo = extraInfo;
    };
}
module.exports = Condtion;