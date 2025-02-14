const mongoose = require("mongoose");

const cheeseSchema = new mongoose.Schema({
    name: String,
    isStinky: Boolean,
  });