"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var createRealEstate = {
  tags: ['User'],
  description: "Create a User",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: _defineProperty({
            location: {
              province: {
                type: String
              },
              District: {
                type: String
              },
              street: {
                type: String
              }
            },
            price: {
              type: String
            },
            YearBuilt: {
              type: Date,
              "default": Date.now
            },
            image: {
              type: Array,
              "default": []
            },
            beds: {
              type: Number
            },
            description: {
              type: String
            },
            bath: {
              type: Number
            },
            status: {
              type: String
            },
            LotSize: {
              type: String
            }
          }, "description", {
            type: String
          })
        }
      }
    }
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          type: "object",
          example: {
            status: "success",
            data: []
          }
        }
      }
    }
  }
};
var deleteUserById = {
  tags: ['User'],
  description: "Delete the user by id",
  security: [{
    token: []
  }],
  parameters: [{
    name: "id",
    "in": "path",
    description: "id of user",
    type: "string",
    example: "63caaf3527b29e1d399896da"
  }],
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          type: 'object',
          example: {
            status: "success",
            data: []
          }
        }
      }
    }
  }
};
exports.userRouteDocs = {
  "/RealEstate/createEstate": {
    post: createRealEstate
  }
};