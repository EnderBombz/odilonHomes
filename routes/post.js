const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')

router.post("/homeSpawn/:playerName/:HomeSpawn", postController.homeSpawn);


module.exports = router;