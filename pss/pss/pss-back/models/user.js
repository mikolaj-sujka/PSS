const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: {type: String},
  city: {type: String},
  discipline: {type: String},
  team: {type: String},
  age: {type: Number},
  weight: {type: Number},
  height: {type: Number},
  img: {type: String},
  role: {type: String}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
