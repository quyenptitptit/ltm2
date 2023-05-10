const express = require('express');
const bodyparser = require('body-parser')
const routes = require('./route')
const cors = require('cors')

const app = express();

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
app.use('/api', routes)
// const mysql = require('mysql2')
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123",
//   database: "qlnhatro"
// })
// conn.connect(function(err) {
//     // if (err) throw err;
//     var sql = "SELECT * FROM qlnhatro.nhatro WHERE idday = \"" + "dn1" + "\"";
//     conn.query(sql, function(err, results) {
//       // if (err) throw err;
//       console.log(results);
//     })
//   });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});