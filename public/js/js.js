// Initialize Firebase
require('dotenv').config()

var PROJ = process.env.PROJECT;
var config = {
    apiKey: process.env.APIKEY,
    authDomain: PROJ + ".firebaseapp.com",
    databaseURL: "https://" + PROJ + ".firebaseio.com",
    projectId: PROJ,
    storageBucket: PROJ + ".appspot.com",
    messagingSenderId: process.env.MSGID
  };
firebase.initializeApp(config);
