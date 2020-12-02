const express = require("express");
const apiRouter = express.Router();
const downloadRouter = require("./download");

apiRouter.use("/download", downloadRouter);

module.exports = apiRouter;
