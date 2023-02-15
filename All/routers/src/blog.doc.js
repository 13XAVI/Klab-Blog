const listAllBlogs = {
    tags: ['Blog'],
    description: "List all Blogs",
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

const getBlogById = {
    tags: ['Blog'],
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
            description: "id of the blog",
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

const createBlog = {
    tags: ['Blog'],
    description: "Create a Blog post",
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
                        title: {
                            type: "string",
                        },
                        body: {
                            type: "string",
                        },
                        UploadImages: {
                            type: "file",
                            description: "the image of the blog post"
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

const deleteBlogPost = {
    tags: ['Blog'],
    description: "Delete the blog post by id",
    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the blog",
            type: "string"
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

const updateBlogPost = {
    tags: ['Blog'],
    description: "Update a Blog post",
    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the blog",
            type: "string"
        }
    ],
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                        },
                        body: {
                            type: "string",
                        },
                        UploadImages: {
                            type: "file",
                            description: "the image of the blog post"
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
const likeBlog = {
    tags: ['Blog'],
    description: "Like a Post",
    security: [
        {
            token: []
        }
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the blog",
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
const unlikeBlog = {
    tags: ['Blog'],
    description: "Unlike a Post",
    security: [
        {
            token: []
        }
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the blog",
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
const CreatecommentBlog = {
    tags: ['Blog'],
    description: "Unlike a Post",
    security: [
        {
            token: []
        }
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the blog",
            type: "string",
            example: "63e49502981c85d9d72937f0",
            properties: {

                comment: {
                    type: 'String', ref: "User",
                    description: "This is Crating comment Blog"
                },

            }
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

const getBlogCommentById = {
    tags: ['Blog'],
    description: "Get blog comment by id",
    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the blog",
            type: "string",
            example: "63e49502981c85d9d72937f0"
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

const deleteCommentBlogId = {
    tags: ['Blog'],
    description: "Delete the comment blog by id",
    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the comment",
            type: "string"
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


exports.blogRouteDocs = {
    "/Blog/createBlog": {
        post: createBlog
    },
    "/Blog/all": {
        get: listAllBlogs
    },
    "/Blog/{id}": {
        get: getBlogById
    },
    "/Blog/delete/{id}": {
        delete: deleteBlogPost
    },
    "/Blog/update/{id}": {
        patch: updateBlogPost
    }
    , "/blog/likes/{id}": {
        post: likeBlog
    },
    "/Blog/unlikes/{id}": {
        post: unlikeBlog
    },
    "/Blog/CreateComment/{id}": {
        post: CreatecommentBlog
    },
    "/Blog/GetComment/{id}": {
        get: getBlogCommentById
    },
    "/Blog/DeleteComment/{id}": {
        delete: deleteCommentBlogId
    }
}