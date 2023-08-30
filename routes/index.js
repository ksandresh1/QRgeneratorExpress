const router = require('express').Router();
const apiRouter = require('../modules/api');

router.use("/api/v1",apiRouter);


module.exports = router;
