const express = require('express');
const app = express();
const Routes = require('./src/routes/Router');
let port = process.env.PORT || 80;   
app.use('/', Routes);
app.listen(port, () => {});