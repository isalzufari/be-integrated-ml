const detectObjects = require('../services/object_detections/detectObject');

class PredictsHandler {
  constructor() {
    this.postPredictHandler = this.postPredictHandler.bind(this);
  }

  async postPredictHandler(request, h) {
    const { image } = request.payload;
    const { model } = request.server.app;

    // const newModel = {
    //   net: model,
    //   inputShape: model.inputs[0].shape,
    // }

    const data = await detectObjects({ image, model });

    return ({
      status: 'success',
      data
    });
  }
}

module.exports = PredictsHandler;
