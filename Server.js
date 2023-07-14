const express = require('express'); 
const serverConfig = require('./configs/server.config')
const app = express(); // app is a central controller in this server

// Starting the Server
app.listen(serverConfig.PORT, () => { 
    console.log(`Server Started on the port number ${serverConfig.PORT}:)`)
})