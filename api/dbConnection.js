const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "Alex",
  database: "notes_db",
  password: "root"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });