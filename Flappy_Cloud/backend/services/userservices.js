const knex = require('knex');
const config = require('../../knexfile');
const db = knex(config.development);

module.exports = {
  add,
  get,
  findByUsername,
  update,
  remove
};

async function add(user) {
  const username = db("users").insert(user)

  return username;
}

function get() {
  return db("users");
}

function findByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}

function update(username, highscore) {
  return db("users")
    .where({ username })
    .update(highscore, [username]);
}

function remove(username) {
  return db("users")
    .where({ username })
    .del();
}