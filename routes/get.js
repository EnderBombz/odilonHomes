const express = require('express');
const router = express.Router();
const getController = require('../controllers/get')

router.get("/hello", (req, res) => {
    res.send("ta_enviando_e_recebendo");
})

router.get("/homeSpawn/:playerName", getController.homeSpawns)

module.exports = router;