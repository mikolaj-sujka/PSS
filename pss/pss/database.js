var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err){
    console.error(err.message)
    throw err
  }
  else{
    console.log('Connected to the SQLIte database')
    db.run(
      `CREATE TABLE user(
            id_user INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text,
            password text,
            city text,
            discipline text,
            team text,
            age INTEGER,
            weight INTEGER,
            height INTEGER,
            img text
            )`,
      (err) => {
        if (err) {
          //table already created
        } else {
          //inserting data
          let insert = 'INSERT INTO user(name, email, password, city, discipline, team, age, weight, height, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
          db.run(insert, ["Jan Kowalski", "user@example.com", md5("abc1"), "Lublin", "Piłka nożna", "abc", 25, 82, 175, ""])
          db.run(insert, ["Cyprian Kowalczyk", "user1@example.com", md5("abc2"), "Kraków", "Koszykówka", "abc", 25, 82, 175, ""])
          db.run(insert, ["Kamil Janowski", "user2@example.com", md5("abc3"), "Wrocław", "Siatkówka", "abc", 25, 82, 175, ""])
          db.run(insert, ["Janusz Jankowski", "user3@example.com", md5("abc4"), "Lublin", "Piłka nożna", "abc", 25, 82, 175, ""])
          db.run(insert, ["Mateo Domino", "user4@example.com", md5("abc5"), "Lublin", "Piłka nożna", "abc", 25, 82, 175, ""])
        }
      });
  }
});

module.exports = db
