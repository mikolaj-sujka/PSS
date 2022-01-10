const app = require("./pss-back/app");
const debug = require("debug")("node-angular");
const http = require("http");


const db = require("./database.js") //do wywalenia

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


/////////////////////////////////////////////////////// do wywalenia ///////////////////////////

app.get("/api/v1/user/search/:name&:city&:discipline", (req, res, next) => {
  const name = req.params.name
  const city = req.params.city
  const discipline = req.params.discipline

  let flag = 0
  let search = "where "
  if (name != "any") {
    search += `user.name LIKE '%` + name + `%'`;
    flag = 1
  }
  if (city != "any") {
    if (flag == 1)
      search += ` and user.city = "` + city + `"`;
    else {
      search += `user.city = "` + city + `"`;
      flag = 1
    }
  }
  if (discipline != "any") {
    if (flag == 1)
      search += ` and user.discipline = "` + discipline + `"`;
    else {
      search += `user.discipline = "` + discipline + `"`;
      flag = 1
    }
  }
  let sql = "";
  if (flag == 0)
    sql = "select * from user;"
  else
    sql = "select * from user " + search + ";"

  let params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json(rows)
  });
});

app.get("/api/v1/user/:id", (req, res, next) => {
  const id = req.params.id

  let sql = "select * from user where user.id_user = " + id + ";";
  db.get(sql, [], (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json(row)
  });
});

app.patch("/api/v1/user/:id", (req, res, next) => {
  var data = {
    name: req.body.name,
    city: req.body.city,
    discipline: req.body.discipline,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height
  }


  db.run(
    `UPDATE user set
    name = COALESCE(?, name),
    city = COALESCE(?, city),
    discipline = COALESCE(?, discipline),
    age = COALESCE(?, age),
    weight = COALESCE(?, weight),
    height = COALESCE(?, height)
    WHERE id_user = ?`,
    [data.name, data.city, data.discipline, data.age, data.weight, data.height, req.params.id],
    function (err, result){
      if (err){
        res.status(400).json({"error": res.message})
        console.log(err)
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes
      })
  });
});



app.get("/api/v1/team/find/:name&:city&:discipline", (req, res, next) => {
  const name = req.params.name
  const city = req.params.city
  const discipline = req.params.discipline

  let flag = 0
  let search = "where "
  if (name != "any") {
    search += `team.name LIKE '%` + name + `%'`;
    flag = 1
  }
  if (city != "any") {
    if (flag == 1)
      search += ` and team.city = "` + city + `"`;
    else {
      search += `team.city = "` + city + `"`;
      flag = 1
    }
  }
  if (discipline != "any") {
    if (flag == 1)
      search += ` and team.discipline = "` + discipline + `"`;
    else {
      search += `team.discipline = "` + discipline + `"`;
      flag = 1
    }
  }
  let sql = "";
  if (flag == 0)
    sql = "select * from team;"
  else
    sql = "select * from team " + search + ";"

  let params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json(rows)
  });
});

app.get("/api/v1/team/:id", (req, res, next) => {
  const id = req.params.id

  let sql = "select * from team where team.id = " + id + ";"

  db.get(sql, [], (err, row) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json(row)
  });
});

