"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var swaggerUi = require('swagger-ui-express');
var swaggerJSDocs = require('swagger-jsdoc');
var userRouteDocs = require('./user.doc');
var blogRouteDocs = require('./blog.doc');
var options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Blog Backend',
      description: 'Post Api'
    },
    servers: [{
      url: 'http://localhost:7000',
      description: 'Development server'
    }, {
      url: 'https://xavier-x22k.onrender.com',
      description: 'Production server'
    }, {
      url: 'https://odd-gold-turkey-veil.cyclic.app',
      description: 'Production server'
    }],
    tags: [{
      name: 'User',
      description: 'User Routes'
    }, {
      name: 'Blog',
      description: 'Blog Routes'
    }],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: "token",
          "in": "header"
        }
      }
    },
    paths: _objectSpread(_objectSpread({}, userRouteDocs.userRouteDocs), blogRouteDocs.blogRouteDocs)
  },
  apis: ['../routes/**/*.js']
};
var swaggerSpec = swaggerJSDocs(options);
var swaggerDocs = function swaggerDocs(app) {
  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/documentation.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
module.exports = swaggerDocs;