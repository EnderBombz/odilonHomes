const db = require('../database')
const firebase = require('firebase')

exports.homeSpawns = async(req, res) => {


    let config = req.params.playerName
    const playerName = config.replace("$", "");


    const ref = firebase.default.database().ref()
    const dbRef = ref.child(`homes`).child(playerName)

    dbRef.get().then(snap => {
        if (snap.exists()) {
            res.json(snap.val())
        } else {
            res.send("error");
        }
    }).catch(function(error) {
        res.send(error);
    });

    /*await dbRef.once("value", function(data) {
        let f = data.getValue(playerName);
        f.key = data.key;
        console.log(data.val());
        res.json(data.val());
    });*/





}