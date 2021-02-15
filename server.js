const express = require('express');
const app = express();
const port = 3001;
const path = require('path')
const server = require('http').createServer(app);
// server-side
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


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
const chatRoute = require('./server/routes/chatRoute')

const connectDB = require('./server/tools/db');

// Basic requirements and setup
require('dotenv').config();
connectDB();

// Route
app.use('/*', bodyParser.json());
app.use('/v1/oauth', oAuthRoute);
app.use('/v1/products', productRoute);
app.use('/auth', authRoute);
app.use('/v1/users', userRoute);
app.use('/v1/banners', bannerRoute)
app.use('/v1/reviews', reviewRoute)
app.use('/v1/favorite', favoriteRoute)
app.use('/v1/shops',shopRoute)
app.use('/v1/my', myRoute)
app.use('/v1/chat', chatRoute)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'client/build')))
  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname+'client/build/index.html'))
  })
}  //static is a middleware that allows us to serve a static file, which when we run 'npm run build', it will generate a file called build

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

server.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
