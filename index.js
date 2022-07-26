const express = require('express');
const app = express();
const Routes = require('./src/routes/Router');
let port = process.env.PORT || 3000;   
app.use('/', Routes);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })  

app.listen(port, () => {});