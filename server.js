const express = require('express');
const app = express();
const port = 3001;
const path = require('path')
const bodyParser = require('body-parser');
const authRoute = require('./server/routes/authRoute');
const userRoute = require('./server/routes/userRoute');
const oAuthRoute = require('./server/routes/oAuthRoute');
const productRoute = require('./server/routes/productRoute');
const bannerRoute = require('./server/routes/bannerRoute');
const reviewRoute = require('./server/routes/reviewRoute')
const favoriteRoute = require('./server/routes/favoriteRoute')
const shopRoute =  require('./server/routes/shopRoute')
const myRoute = require('./server/routes/myRoute')

const connectDB = require('./server/tools/db');

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
app.use('/v1/banners', bannerRoute)
app.use('/v1/reviews', reviewRoute)
app.use('/v1/favorite', favoriteRoute)
app.use('/v1/shops',shopRoute)
app.use('/v1/my', myRoute)


if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'client/build')))
  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname+'client/build/index.html'))
  })
}  //static is a middleware that allows us to serve a static file, which when we run 'npm run build', it will generate a file called build


app.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
