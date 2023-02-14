"use strict";

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  //_id:mongoose.Schema.Types.ObjectId, 
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  role: {
    type: String,
    "default": "user"
  }
});
module.exports = mongoose.model('User', UserSchema);