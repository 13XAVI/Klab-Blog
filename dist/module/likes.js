"use strict";

var mongoose = require('mongoose');
var likeSchema = new moongose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  }
});
module.exports = mongoose.model('likes', likeSchema);