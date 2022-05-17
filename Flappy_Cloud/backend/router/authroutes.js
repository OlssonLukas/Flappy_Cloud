const express = require('express');
const Auth = require('../services/authservices.js');

const router = express.Router();

// all endpoints use "/api/users"

router.post('/adduser', (req, res) => {
  Auth.add(req.body)
    .then(user => {
      res.status(200).json(req.body)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't add user" });
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Auth.findByUsername(username)
    .then((user) => {
      if (user.password == password) {

        req.session.user = {
          username: user.username,
          role: user.role
        };

        console.log(req.session)
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: `Invalid credentials` });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.status(500).json({ message: 'logout failed' })
      }
    });
  } else {
    res.status(200).json({ message: 'User not logged in' })
  }
})


module.exports = router;