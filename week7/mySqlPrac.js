var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,

  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "top_songsDB"
});

var queryByArtist = function(artist){
  connection.query("SELECT song, year FROM top5000 WHERE artist = '" + artist + "';",function(err,data){
    if(err) throw err;
    console.log(data);
  })
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  queryByArtist("Madonna");
});


