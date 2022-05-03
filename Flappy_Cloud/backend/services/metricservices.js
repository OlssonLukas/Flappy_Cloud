const db = require("../dbConfig");

module.exports = {
  add,
  get,
  findByUsername,
};

async function add(metric) {
  const id = db("metrics").insert(metric)
  return id;
}

function get() {
  return db("metrics");
}

function findByUsername(username) {
  return db("metrics")
    .where({ username })
}