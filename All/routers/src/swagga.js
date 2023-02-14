const swaggerUi=require('swagger-ui-express');
const swaggerJSDocs=require('swagger-jsdoc');
const userRouteDocs=require('./user.doc');
const blogRouteDocs=require('./blog.doc');

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
        url: 'https://xavier-x22k.onrender.com',
        description: 'Production server',
      },
      {
        url: 'https://odd-gold-turkey-veil.cyclic.app',
        description: 'Production server',
<<<<<<< HEAD:All/routers/src/swagga.js
      }
=======
      },

>>>>>>> e54d4ced0149ae9da0af99b12e7f4f2b0cd84342:routers/src/swagga.js
    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name: 'Blog', description: 'Blog Routes' },
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
    paths: { ...userRouteDocs.userRouteDocs,...blogRouteDocs.blogRouteDocs},
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