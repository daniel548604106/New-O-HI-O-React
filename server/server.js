const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')
const server = require('http').createServer(app);
const React = require('react')
const ReactDOMServer = require('react-dom/server')
// const App = require('../client/index.js')


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const oAuthRoute = require('./routes/oAuthRoute');
const productRoute = require('./routes/productRoute');
const bannerRoute = require('./routes/bannerRoute');
const reviewRoute = require('./routes/reviewRoute')
const favoriteRoute = require('./routes/favoriteRoute')
const shopRoute =  require('./routes/shopRoute')
const myRoute = require('./routes/myRoute')
const chatRoute = require('./routes/chatRoute')
const orderRoute = require('./routes/orderRoute')
const searchRoute = require('./routes/searchRoute')

const connectDB = require('./tools/db');

// Basic requirements and setup
require('dotenv').config();
connectDB();


// server-side

// app.get('/', (req, res) => {
//   const app = ReactDOMServer.renderToString(<App />);

//   const indexFile = path.resolve('./client/build/index.html');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });

// Middleware

// let setCache = function (req, res, next) {
//   // here you can define period in second, this one is 5 minutes
//   const period = 60 * 5 

//   // you only want to cache for GET requests
//   if (req.method == 'GET') {
//     res.set('Cache-control', `public, max-age=${period}`)
//   } else {
//     // for the other requests set strict no caching parameters
//     res.set('Cache-control', `no-store`)
//   }

//   // remember to call next() to pass on the request
//   next()
// }

// // now call the new middleware function in your app

// app.use(setCache)




// Route
app.use('/*', bodyParser.json());
app.use('/v1/oauth', oAuthRoute);
app.use('/v1/products', productRoute);
app.use('/v1/auth', authRoute);
app.use('/v1/users', userRoute);
app.use('/v1/banners', bannerRoute)
app.use('/v1/reviews', reviewRoute)
app.use('/v1/favorite', favoriteRoute)
app.use('/v1/shops',shopRoute)
app.use('/v1/my', myRoute)
app.use('/v1/chat', chatRoute)
app.use('/v1/orders', orderRoute)
app.use('/v1/search', searchRoute)
//監聽 Server 連線後的所有事件，並捕捉事件 socket 執行
io.on('connection', socket => {
  //經過連線後在 console 中印出訊息
  console.log('success connect!')
  socket.on('join', ({roomId}) =>{
    console.log('roomId',roomId)
    }
  )
  //監聽透過 connection 傳進來的事件
  socket.on('getMessage', ({...data}) => {
      //回傳 message 給發送訊息的 Client
      console.log(data)
      socket.emit('message', data)
  })
})


const options = {
  etag: true,
  lastModified: false,
  maxAge: 0
}


if(process.env.NODE_ENV === 'production'){ // if the application is running on heroku, we then execute the following function
  app.use(express.static(path.join(__dirname, '/../client/build')),options);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname ,'..','client','build','index.html'));
  });
}  //static is a middleware that allows us to serve a static file, which when we run 'npm run build', it will generate a file called build


server.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
