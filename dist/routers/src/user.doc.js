"use strict";

var listAllUsers = {
  tags: ['User'],
  description: "List all users",
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
var createUser = {
  tags: ['User'],
  description: "Create a User",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            firstname: {
              type: "string",
              description: "user name",
              example: "diamond"
            },
            lastname: {
              type: "string",
              description: "user name",
              example: "diamond"
            },
            email: {
              type: "string",
              description: "user email",
              example: "diamond@gmail.com"
            },
            password: {
              type: "string",
              description: "user password",
              example: "12345"
            }
          }
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
var login = {
  tags: ['User'],
  description: "Login",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: " user email",
              example: "diamond@gmail.com"
            },
            password: {
              type: "string",
              description: " user password",
              example: "12345"
            }
          }
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
var getUserById = {
  tags: ['User'],
  description: "Get the user by id",
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
var updateUserById = {
  tags: ['User'],
  description: "Update user by id",
  /*security: [
      {
        token: [],
      },
  ],*/
  parameters: [{
    name: "id",
    "in": "path",
    description: "id of user",
    type: "string",
    example: "63caaf3527b29e1d399896da"
  }],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: "user email",
              example: "diamond@gmail.com"
            },
            password: {
              type: "string",
              description: "user password",
              example: "12345"
            },
            role: {
              type: "string",
              description: "role of the user",
              example: "admin"
            }
          }
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
exports.userRouteDocs = {
  "/user/signup": {
    post: createUser
  },
  "/user/login": {
    post: login
  },
  "/user/all": {
    get: listAllUsers
  },
  "/user/delete/{id}": {
    "delete": deleteUserById
  },
  "/user/update/{id}": {
    patch: updateUserById
  }
};