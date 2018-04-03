const order = require("../dao/Orders");
let orderService = {
    queryAllOrderService: (condition, order, callback) => {

    },
    queryOrderService: (order, callback) => {

    },
    addOrderService: (order, orderDetails, callback) => {

    },
    modifyOrderService: (order, callback) => {

    },
    removeOrderService: (order, callback) => {

    },
    queryAllProvinceService: (callback) => {

    },
    queryWorkTypeStock: (workTypes, callback) => {

    },
    exportOrderToXlsService: (callback) => {

    },
    resendEmailService: (order, callback) => {

    },
    queryAllWorkTypeForShoppingCarService: (workTypes, callback) => {

    },
    modifyAddressService: (order, callback) => {

    },
    modifyAddressEmailService: (order, callback) => {

    },
    queryShoppingCarListService: (redisKey, callback) => {

    },
    addorModifyWorkToShoppingCarService: (redisKey, orderDetailForAddOrders, callback) => {

    },
    removeShoppingCarListService: (redisKey, callback) => {

    }
}
module.exports = orderService;