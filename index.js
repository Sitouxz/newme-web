const express = require('express');
const app = express();
const HomeRoutes = require('./src/routes/Home');
let port = process.env.PORT || 3000;   
app.use('/', HomeRoutes);
app.listen(port, () => {

});