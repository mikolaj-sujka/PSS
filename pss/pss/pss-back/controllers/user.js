const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({email: req.body.email})
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        {email: fetchedUser.email, userId: fetchedUser._id},
        process.env.JWT_KEY,
        {expiresIn: "1h"}
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        message: "Find Error",
        error: error
      })
    })
}

exports.findUser = (req, res) => {
  let name = req.params.name;
  let city = req.params.city;
  let discipline = req.params.discipline;

  if (name === "any")
    name = ".";
  if (city === "any")
    city = ".";
  if (discipline === "any")
    discipline = ".";

  User.find({name: new RegExp(name), city: new RegExp(city), discipline: new RegExp(discipline)})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        message: "Find Error",
        error: error
      })
    })
}

exports.updateUser = (req, res) => {
  User.updateOne({email: req.body.email},
    {
      $set: {
        name: req.body.name,
        city: req.body.city,
        discipline: req.body.discipline,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height
      }
    })
    .then(result => {
      if (result.matchedCount > 0) {
        res.status(204).json({message: "Update successful!"});
      } else {
        console.log(result)
        res.status(401).json({message: "Not authorized!"});
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "Couldn't update user!",
        error: error
      });
    });
}

