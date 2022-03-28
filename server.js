        // socket.join(category[i])
        // const roomList = socketAPI.adapter.rooms
        // const roomNameList = roomList.keys()
        // for(let i=0; i<roomList.size; i++) {
        //    list.push(roomNameList.next().value) 
        // }

var express =require('express')
const mongoose = require("mongoose")
var app = express();
var server = require('http').createServer(app);
const cookieParser = require("cookie-parser")
var io = require('socket.io')(server);

app.set('view engine', 'ejs'); // 렌더링 엔진 모드를 ejs로 설정
app.set('views',  __dirname + '/views');    // ejs이 있는 폴더를 지정
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())

const mainPageController = require("./controller/main")

const {AuthMiddleware} = require("./middleware/user")
const {start} = require("./socketServer")

app.use('/', AuthMiddleware, mainPageController)
start(io)

mongoose.connect('mongodb+srv://root:root@cluster0.hhpry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(err) {
  if (err) {
      console.error('mongodb connection error', err);
      throw err
  }
  console.log(`mongodb connected`);
});

server.listen(80, function() {
  console.log('Listening on http://localhost');
});