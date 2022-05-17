const res = require("express/lib/response");
const db = require("../dbConfig");

module.exports = {
  add,
  findByUsername
};

async function add(user) {
  const username = await db("users").insert(user)

  return username;
}

function findByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}