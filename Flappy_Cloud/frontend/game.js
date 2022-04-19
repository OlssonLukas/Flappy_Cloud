const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .all("*", (req, res) => {
    res.sendFile(path.join(
      __dirname, '../',
      'frontend',
      'view.html'
    ))
  })
  .listen(PORT, () => {
    console.log(`Flappy running at PORT: ${PORT}`);
  })
