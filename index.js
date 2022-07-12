const express = require('express');
const app = express();
const HomeRoutes = require('./src/routes/Home');

app.use('/', HomeRoutes);
app.listen(80);