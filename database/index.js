const firebase = require('firebase');
const firebaseConfig = require('../config/database');
module.exports = firebase.initializeApp(firebaseConfig);