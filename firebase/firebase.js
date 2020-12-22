// Firebase
const admin = require('firebase-admin');
const serviceAccount = require('./maglog-csv-to-xml-firebase-adminsdk-6adln-ca4f9f2013.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
