const express = require("express");
const starrysea = express();
const activity = require("./controllers/activity");
const online = require("./controllers/online");
const order = require("./controllers/order");
const question = require("./controllers/question");
const root = require("./controllers/root");
const user = require("./controllers/user");
const work = require("./controllers/work");
starrysea.use("/activity", activity);
starrysea.use("/online", online);
starrysea.use("/order", order);
starrysea.use("/question", question);
starrysea.use("/", root);
starrysea.use("/user", user);
starrysea.use("/work", work);
starrysea.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
starrysea.use((err, req, res, next) => {
    console.log("error:" + err.message);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status).send(err);
});
starrysea.listen(3000, function () {
    console.log("server start");
});
module.exports = starrysea;