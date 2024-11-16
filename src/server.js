require('dotenv').config();

const Hapi = require('@hapi/hapi');

const loadModel = require('./services/tf/loadModel');

const predicts = require('./api');

const init = async () => {
  const {
    HOST,
    PORT,
  } = process.env;

  const model = await loadModel();

  const server = Hapi.server({
    host: HOST || "0.0.0.0",
    port: PORT || 8086,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.app.model = model;

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: async (request, h) => {
        return h.response({
          status: 'success',
          message: 'Server running!'
        })
      }
    },
  ]);

  await server.register([
    {
      plugin: predicts,
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();