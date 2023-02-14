
const createRealEstate= {
    tags:['User'],
    description:"Create a User",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        

                        location:{
                            province:{
                                type:String
                            },
                            District:{
                                type:String
                            },
                            street:{
                                type:String
                            }
                        },
                        price:{
                            type:String
                        },
                        YearBuilt:{
                            type:Date,
                            default: Date.now
                        },
                        image:{
                            type:Array,
                            default:[]
                        },
                        beds:{
                            type:Number
                        },
                        description:{
                            type:String
                        },
                        bath:{
                            type:Number
                        },
                        status:{
                            type:String
                        },
                        
                        LotSize:{
                            type:String
                        },
                        description:{
                            type:String
                        }



                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
    }

    
    const deleteUserById = {
        tags:['User'],
        description:"Delete the user by id",
        security: [
            {
              token: [],
            },
        ],
        parameters:[
            {
                name:"id",
                in:"path",
                description:"id of user",
                type:"string",
                example:"63caaf3527b29e1d399896da"
            }
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

        exports.userRouteDocs = {
            "/RealEstate/createEstate":{
                post:createRealEstate,
            }}