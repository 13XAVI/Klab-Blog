"use strict";

var mongoose = require('mongoose');
var comentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  comment: {
    type: String,
    ref: "User"
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  }
});
module.exports = mongoose.model("comments", comentSchema);