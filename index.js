const express = require('express');
const app = express();
const Routes = require('./src/routes/Router');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
let port = process.env.PORT || 3000;   
app.use('/', Routes);
app.listen(port, () => {});