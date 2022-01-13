const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const teamSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  discipline: { type: String, required: true },
  img: {type: String},
  capitan: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

teamSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Team", teamSchema);
