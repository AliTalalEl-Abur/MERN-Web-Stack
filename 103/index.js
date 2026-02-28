const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-AllowOrigin", "*");
  res.header("Access-Control-AllowHeaders", "Origin, X-RequestedWith, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
