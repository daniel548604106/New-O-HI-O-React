const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const authRoute = require('./src/server/routes/authRoute');

require('dotenv').config();

app.use('/*', bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
