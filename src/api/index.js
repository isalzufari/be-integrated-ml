const PredictsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'predicts',
  version: '1.0.0',
  register: async (server, { service }) => {
    const predictsHandler = new PredictsHandler(service);
    server.route(routes(predictsHandler));
  }
}