const Pool = require('pg').Pool
const cellar = new Pool({
    user: "postgres",
    password: "yachtspainpolka",
    host: "localhost",
    port: 1138,
    database: "cellar_rat"
})

module.exports = cellar