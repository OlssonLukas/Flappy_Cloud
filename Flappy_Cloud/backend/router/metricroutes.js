const express = require('express');
const Metrics = require('../services/metricservices.js');

const router = express.Router();

// all endpoints use "/api/metrics"

router.post('/addmetric', (req, res) => {
  Metrics.add(req.body)
    .then(metric => {
      res.status(200).json(req.body)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't add metric" });
    });
});

router.get('/getallmetrics', (req, res) => {
  Metrics.get()
    .then(metrics => {
      res.status(200).json(metrics)
    })
    .catch(error => {
      res.status(500).json({ message: "Couldn't get metric", error });
    });
});

router.get('/usermetrics/:username', (req, res) => {
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

module.exports = router;