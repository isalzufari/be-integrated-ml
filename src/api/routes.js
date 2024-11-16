const routes = (handler) => [
  {
    method: 'POST',
    path: '/predicts',
    handler: handler.postPredictHandler,
  },
];

module.exports = routes;
