const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
  const modelUrl = "file://src/models/model.json";
  return tf.loadGraphModel(modelUrl, {
    onProgress: (fraction) => {
      console.log(fraction);
    }
  });
}

module.exports = loadModel;
