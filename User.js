// Ubicación: /server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  height: Number,
  age: Number,
  gender: String,
  medicalConditions: [String],
  bodyType: String,
  goal: String,
});

module.exports = mongoose.model('User', userSchema);
