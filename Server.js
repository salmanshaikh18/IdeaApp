const express = require('express'); 

const app = express(); // app is a central controller in this server

// Starting the Server
app.listen(3000, () => { 
    console.log(`Server Started :)`)
})