const swaggerUi=require('swagger-ui-express');
const swaggerJSDocs=require('swagger-jsdoc');
const userRouteDocs=require('./user.doc');
const blogRouteDocs=require('./blog.doc');
const RealEstateDocs = require('./RealEstate.doc');
const MessageDoc = require('./message.doc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Blog Backend',
      description: 'Post Api',
    },
    servers: [
      {
        url: 'http://localhost:7000',
        description: 'Development server',
      },
      {
        url: 'https://odd-cyan-binturong-fez.cyclic.app',
        description: 'Production server',
      },
      {
        url: 'https://francois.onrender.com',
        description: 'Production server',
      }

    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name: 'Blog', description: 'Blog Routes' },
      { name: 'RealEstate', description: 'RealEstate Routes' },
      { name: 'Message', description: 'Message Routes' },
    ],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name:"token",
          in:"header"
        },
      },
    },
    paths: { ...userRouteDocs.userRouteDocs,...blogRouteDocs.blogRouteDocs,...RealEstateDocs.RealEstateDocs,...MessageDoc.MessageDoc},
  },
  apis: ['../routes/**/*.js'],
};
const swaggerSpec = swaggerJSDocs(options);
const swaggerDocs = (app) => {
  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/documentation.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports= swaggerDocs;