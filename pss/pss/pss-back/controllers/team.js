const Team = require("../models/team");

exports.createTeam = (req, res) => {
  const team = new Team({
    name: req.body.title,
    city: req.body.content,
    discipline: req.body.content,
    creator: req.userData.userId
  });

  team.save()
    .then(createdTeam => {
      res.status(201).json({
        message: "Team added successfully",
        team: {
          ...createdTeam,
          id: createdTeam._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a team failed!",
        error: error
      });
    });
};

exports.findTeam = (req, res) => {
  let name = req.params.name;
  let city = req.params.city;
  let discipline = req.params.discipline;

  if(name === "any")
    name = ".";
  if(city === "any")
    city = ".";
  if(discipline === "any")
    discipline = ".";


  Team.find({name: new RegExp(name), city: new RegExp(city), discipline: new RegExp(discipline)})
    .then(teams => {
      res.status(200).json(
        teams
      );
    })
    .catch(error => {
      res.status(500).json({
        message: "Find Error",
        error: error
      })
    })
}

exports.getTeam = (req, res) => {
  Team.findById(req.params.id)
    .then(team => {
      res.status(200).json(
        team
      );
    })
    .catch(error => {
      res.status(500).json({
        message: "Find Error",
        error: error
      })
    })
}



