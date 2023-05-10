const mysql = require('mysql2')
const { parse, stringify } = require('flatted')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "qlnhatro"
})
// JSON.parse(stringify(id))
const search = {
    searchByDay: (id, callback) => {
        return conn.query("SELECT * FROM qlnhatro.nhatro WHERE idday = \"" + id + "\"", callback)
    },

    searchByPrice: (min, max, callback) => {
        return conn.query("SELECT * FROM qlnhatro.nhatro WHERE giaphong >= " + min + " AND giaphong <= " + max, callback)
    },

    getDayNha: (callback) => {
        return conn.query("SELECT * FROM qlnhatro.daynha", callback)
    }
}

module.exports = search