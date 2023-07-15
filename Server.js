const express = require('express'); 
const serverConfig = require('./configs/server.config');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model')


const app = express(); // app is a central controller in this server

/**
 * Logic to connect to MongoDB and create an ADMIN user
 * Need to have the mongodb up and running in our local machine
 */
mongoose.connect(dbConfig.DB_URL); 
const db = mongoose.connection;

db.on("eroor", () => {
    console.log("Error while connecting to DB");
});

db.once("open", () => {
    console.log("Dadabae is connected");

    init();
})





// Starting the Server
app.listen(serverConfig.PORT, () => { 
    console.log(`Server Started on the port number ${serverConfig.PORT}:)`);
})