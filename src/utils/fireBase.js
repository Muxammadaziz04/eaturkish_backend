const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const { firebaseConfig } = require('./config.js')

const app = initializeApp(firebaseConfig);
const fireBaseStorage = getStorage(app)

module.exports = {
    fireBaseStorage
}