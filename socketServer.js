const {category, category_korean} = require("./category.js")

function start(io) {
    for(let i=0; i<category.length; i++) {
        let socketAPI = io.of(`/${category[i]}`)
        socketAPI.on('connection', (socket) => {
            let list = ['전체1', '전체2']
            list.forEach(e => {
                socket.emit('room_key', e)
            })
            socket.on('joinRoom', function (data) {
                socket.join(data)
                socketAPI.to(data).emit("message", '누군가 입장하셨습니다')
                socketAPI.to(data).emit("usercount", socketAPI.adapter.rooms.get(data).size)
            })
            socket.on('leaveRoom', function(data) {
                let count = socketAPI.adapter.rooms.get(data).size -1
                socketAPI.to(data).emit('message','누군가 퇴장하셨습니다')
                socketAPI.to(data).emit('usercount', count)
            });
            socket.on('disconnected', function() {
                console.log(socket)
            });
            socket.on('message', function (data) {
                socketAPI.to(data.room_key).emit("message", data.message)
            })
        })
    }
}

module.exports = {start}