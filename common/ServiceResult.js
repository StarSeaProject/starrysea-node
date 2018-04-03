class ServiceResult {
    constructor() {
        this.result = {};
    }
    setSuccessed(successed) {
        this.successed = successed;
    }
    setResult(key, result) {
        this.result[key] = result;
    }
    getResult(key) {
        return this.result[key];
    }
    setNowPage(page) {
        this.nowPage = page;
    }
    setTotalPage(page) {
        this.totalPage = page;
    }
}
module.exports = ServiceResult;