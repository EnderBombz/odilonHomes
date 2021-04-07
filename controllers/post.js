const db = require('../database')
const firebase = require('firebase')

exports.homeSpawn = async(req, res) => {

    const playerName = req.params.playerName
    const HomeSpawn = req.params.HomeSpawn;

    console.log(playerName, HomeSpawn);

    firebase.default.database().ref().child("homes").child(playerName).set({
        HomeSpawn: HomeSpawn,
    })
}