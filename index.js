require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const topicRoutes = require('./routes/topicRoutes');
require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api', protectedRoutes);

app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});

const http = require('http');
const socketIo = require('socket.io');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {});

app.set('io', io);

io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle any sockets events here
  // ...
});

server.listen(port, () => {
  console.log('Server and Socket.io running on port ${port}');
});

require('./tasks/summaryCron');
