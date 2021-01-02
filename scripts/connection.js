var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "billiard_ball"

});

function conn() {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!")
    });
}

function endcon() {
    console.log("Connection End!");
    con.end();
};

conn();
setTimeout(endcon, 3000)
