const { default: file } = require("@babel/core/lib/transformation/file/file")

const listAllRealEstate = {
    tags:['RealEstate'],
    description:"List all RealEStates",
    security: [
        {
            token: [],
        },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}


const createRealEstate = {
    tags: ['RealEstate'],
    description: "Create a RealEstate",
    security: [
        {
            token: [],
        },
    ],
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {

                        province: {
                            type: 'String'
                        },
                        District: {
                            type: 'String'
                        },
                        street: {
                            type: 'String'
                        }
                        ,
                        price: {
                            type: 'String'
                        },
                        YearBuilt: {
                            type: 'Date',
                            default: 'Date'.now
                        },
                        UploadImages: {
                            type: "file",
                            description: "the image of the blog post"
                        },
                        beds: {
                            type: 'Number'
                        },
                        description: {
                            type: 'String'
                        },
                        bath: {
                            type: 'Number'
                        },
                        status: {
                            type: 'String'
                        },

                        LotSize: {
                            type: 'String'
                        },
                        description: {
                            type: 'String'
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

const RealEstateById = {
    tags: ['RealEstate'],
    description: "Get blog by id",
    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the RealEstate",
            type: "string",
            example: "63ecc8de12c8437cfcc4b19c"
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



const deleteUserById = {
    tags: ['RealEstate'],
    description: "Delete the user by id",
    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of user",
            type: "string",
            example: "63caaf3527b29e1d399896da"
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
const UpdateRealEstateById = {
    tags: ['RealEstate'],
    description: "Create a RealEstate",
    security: [
        {
            token: [],
        },
    ],
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {

                        province: {
                            type: 'String'
                        },
                        District: {
                            type: 'String'
                        },
                        street: {
                            type: 'String'
                        }
                        ,
                        price: {
                            type: 'String'
                        },
                        YearBuilt: {
                            type: 'Date',
                            default: 'Date'.now
                        },
                        UploadImages: {
                            type: "file",
                            description: "the image of the blog post"
                        },
                        beds: {
                            type: 'Number'
                        },
                        description: {
                            type: 'String'
                        },
                        bath: {
                            type: 'Number'
                        },
                        status: {
                            type: 'String'
                        },

                        LotSize: {
                            type: 'String'
                        },
                        description: {
                            type: 'String'
                        }
                    }
                }
            }
        }
    },responses: {
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
exports.RealEstateDocs = {
    "/RealEstate/createEstate": {
        post:createRealEstate,
    },
    "/RealEstate/All": {
        get:listAllRealEstate,
    },
    "/RealEstate/DeleteRealEstate/id": {
        delete:deleteUserById,
    },
    "/RealEstate/GetRealEstate/id": {
        get:RealEstateById,
    },
    "/RealEstate/UpdateEstate/:id": {
        patch:UpdateRealEstateById,
    }
   
}