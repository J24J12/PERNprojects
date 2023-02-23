const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "password",
    port: 5432,
    database: "jwtpern"
});

module.exports = pool;