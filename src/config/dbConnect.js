const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://StDark:BQEYQ7_TrqUXUxv@cluster0.skurm.mongodb.net/alura-node");

let db = mongoose.connection;

module.exports = db;