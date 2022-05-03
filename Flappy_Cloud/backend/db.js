const Pool = require("pg").Pool;

const pool = new Pool({
  user: "trrjrnyzupimxh",
  host: "ec2-63-35-156-160.eu-west-1.compute.amazonaws.com",
  database: "ddnv65og3gdf7l",
  password: "4b7b7af3511307968c563aa225550a5f72360aa2615bf0434a081e334415d72a",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      //      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  }
})

module.exports = pool;