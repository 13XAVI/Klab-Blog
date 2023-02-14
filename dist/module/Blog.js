"use strict";

var mongoose = require('mongoose');
var BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    //required:true,
    unique: true
  },
  body: {
    type: String
  },
  Author: {
    type: String
  },
  likes: {
    type: Number,
    "default": 0
  },
  comment: [{
    type: String,
    href: "coments"
  }],
  img: {
    type: String,
    description: "the image of the blog post"
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Blog', BlogSchema);