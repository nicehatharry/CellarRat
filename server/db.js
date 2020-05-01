const Pool = require('pg').Pool
const cellar = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 1138,
    database: "CellarRat"
})

module.exports = cellar