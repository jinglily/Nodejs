var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'), //入口
    output: {                                   //出口
      //  path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
}
};
