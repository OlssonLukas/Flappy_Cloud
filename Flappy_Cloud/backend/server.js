const express = require('express');
require('dotenv').config()
const session = require('express-session')
const port = process.env.PORT || 5001;
const path = require("path")
const restricted = require("./restricted");

const userRouter = require("./router/userroutes");
const metricRouter = require("./router/metricroutes");
const authRouter = require("./router/authroutes")

const server = express();
const sessionConfig = {
  name: 'flappyCookie',
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    httpOnly: true, // no js access to it
  },
  resave: false,
  saveUninitialized: true
}

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, userRouter);
server.use("/api/metrics", restricted, metricRouter);

server.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

server.use('/', express.static(path.join(__dirname, '../frontend')))

module.exports = server;