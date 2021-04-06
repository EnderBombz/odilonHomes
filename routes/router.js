const express = require('express');
const router = express.Router();

const load = require('./get');
const deleteD = require('./delete');
const post = require("./post")

router.use("/api/get", load);
router.use("/api/delete", deleteD)
router.use("/api/post", post)

module.exports = router;