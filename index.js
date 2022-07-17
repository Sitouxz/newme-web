const express = require('express');
const app = express();
const Routes = require('./src/routes/App');
let port = process.env.PORT || 3000;   
app.use('/', Routes);
app.listen(port, () => {

});