const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const authRoute = require('./src/server/routes/authRoute');
const userRoute = require('./src/server/routes/userRoute');
const oAuthRoute = require('./src/server/routes/oAuthRoute');
const productRoute = require('./src/server/routes/productRoute');
const connectDB = require('./src/server/tools/db');

// Basic requirements and setup
require('dotenv').config();
connectDB();

// Route
app.use('/*', bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/v1/oauth', oAuthRoute);
app.use('/v1/products', productRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
