const listAllMail = {
    tags: ['Message'],
    description: "List all Mail",
    security: [
        {
          token: [],
        },
    ],

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
}

const createMail = {
    tags: ['Message'],
    description: "Create a Messsage",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        firstname: {
                            type: "string",
                            description: "user name",
                            example: "Tresor"
                        },
                        lastname: {
                            type: "string",
                            description: "user name",
                            example: "xavier"
                        },
                        email: {
                            type: "string",
                            description: "user email",
                            example: "tresorxavier@gmail.com"
                        },
                        password: {
                            type: "string",
                            description: "user password",
                            example: "12345"
                        },
                        phone: {
                            type: "Number",
                            description: "user Phone",
                            example: "078000000"
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
}



const getMailById = {
    tags: ['Message'],
    description: "Get the Message by id",
//     security: [
//     {
//       token: [],
//     },
// ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63ee03da42688498f291dc70"
        }
    ],
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
}

const deleteMailById = {
    tags: ['Message'],
    description: "Delete the Message by id",
    // security: [
    //     {
    //         token: [],
    //     },
    // ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of Message",
            type: "string",
            example: "63ee03da42688498f291dc70"
        }
    ],
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
}

const updateMAilById = {
    tags: ['Message'],
    description: "Update Message by id",
    // security: [
    //     {
    //         token: [],
    //     },
    // ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of Message",
            type: "string",
            example: "63ee03da42688498f291dc70"
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        firstname: {
                            type: "string",
                            description: "user name",
                            example: "Tresor"
                        },
                        lastname: {
                            type: "string",
                            description: "user name",
                            example: "xavier"
                        },
                        email: {
                            type: "string",
                            description: "user email",
                            example: "tresorxavier@gmail.com"
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
}

exports.MessageRouterDocs = {
    "/Mail/createMail": {
        post: createMail,
    },

    "/Mail/AllMail": {
        get: listAllMail,
    },

    "/Mail/deleteMail": {
        delete: deleteMailById
    },
    "/Mail/updateMail/:id": {
        patch: updateMAilById
    },
    "/Mail/Mail/:id": {
        patch: getMailById
    }

};