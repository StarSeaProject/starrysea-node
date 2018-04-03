//依赖注入
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require("express3-handlebars").create({ extname: ".hbs" });
const starrysea = express();
starrysea.engine("handlebars", handlebars.engine);
starrysea.set("view engine", "handlebars");
//Controller
const activity = require("./controllers/activity");
const online = require("./controllers/online");
const order = require("./controllers/order");
const question = require("./controllers/question");
const root = require("./controllers/root");
const user = require("./controllers/user");
const work = require("./controllers/work");
//MDW
//Debug
starrysea.use(logger('dev'));
//body parser
starrysea.use(bodyParser.json());
starrysea.use(bodyParser.urlencoded({ extended: false }));
//cookie parser
starrysea.use(cookieParser());
//Routes
starrysea.use("/activity", activity);
starrysea.use("/online", online);
starrysea.use("/order", order);
starrysea.use("/question", question);
starrysea.use("/", root);
starrysea.use("/user", user);
starrysea.use("/work", work);
//Err Handler
starrysea.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
starrysea.use((err, req, res, next) => {
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500).send(err.toString());
});
module.exports = starrysea;