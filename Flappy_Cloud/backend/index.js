require("dotenv").config();
const express = require('express');
const Users = require('./services/userservices.js');
const Metrics = require('./services/metricservices.js');
const server = express();
const port = process.env.PORT || 5001;
server.use(express.json());
const db = require("./dbConfig");
const path = require("path")

server.use('/', express.static(path.join(__dirname, '../frontend')))


// server.use(express.static(__dirname + '..' + '/frontend'));
// server.all('/', (req, res) => {
//   res.sendFile((path.join(
//     __dirname,
//     '../frontend',
//     'index.html')
//   ))
// });


server.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

server.post('/api/adduser', (req, res) => {
  Users.add(req.body)
    .then(user => {
      res.status(200).json(req.body)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't add user" });
    });
});

server.post('/api/login', (req, res) => {
  db("users").select("username").where('username', req.body.username)
    .andWhere('password', req.body.password).then(async function (userO) {
      return (userO[0]?.username === req.body.username);
    })
    .then(user => {
      console.log(user);
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't add user" });
    });
});

server.get('/api/getusers', (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't get users", error });
    });
});

server.get('/api/getuser/:username', (req, res) => {
  Users.findByUsername(req.params.username)
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: "Couldn't find user" })
      }
    })
    .catch(error => {
      res.status(500).json({ message: "an error occurred" });
    });
});

server.patch('/api/updatescore/:username', (req, res) => {
  console.log(req.params.username, req.body.highscore)
  Users.update(req.params, req.body)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "user not found" })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'error updating the highscore', error })
    })
})

server.delete('/api/deleteuser/:username', (req, res) => {
  Users.remove(req.params.username)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'User successfully deleted' })
      } else {
        res.status(404).json({ message: 'User not found' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't delete user" });
    });
});

server.post('/api/metrics/addmetric', (req, res) => {
  Metrics.add(req.body)
    .then(metric => {
      res.status(200).json(req.body)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't add metric" });
    });
});

server.get('/api/metrics/getallmetrics', (req, res) => {
  Metrics.get()
    .then(metrics => {
      res.status(200).json(metrics)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't get metric", error });
    });
});

server.get('/api/metrics/usermetrics/:username', (req, res) => {
  Metrics.findByUsername(req.params.username)
    .then(metrics => {
      if (metrics) {
        res.status(200).json(metrics)
      } else {
        res.status(404).json({ message: "Couldn't find metrics" })
      }
    })
    .catch(error => {
      res.status(500).json({ message: "an error occurred" });
    });
});