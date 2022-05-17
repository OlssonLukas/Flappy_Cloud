const express = require('express');
const Users = require('../services/userservices.js');

const router = express.Router();

// all endpoints use "/api/users"

router.get('/getusers', (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't get users", error });
    });
});

router.get('/getuser/:username', (req, res) => {
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

router.patch('/updatescore/:username', (req, res) => {
  console.log(req.params.username, req.body.highscore)
  Users.update(req.params.username, req.body.highscore)
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

router.delete('/deleteuser/:username', (req, res) => {
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

module.exports = router;