const res = require("express/lib/response");
const db = require("../dbConfig");

module.exports = {
  add,
  get,
  findByUsername,
  update,
  remove,
};

// async function login(user) {
//   await db("users").select("username").where('username', user.username)
//     .andWhere('password', user.password).then(function (userO) {
//       console.log(userO[0]?.username === user.username);
//       return (userO[0]?.username === user.username)
//     })

// }

async function add(user) {
  const username = await db("users").insert(user)

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