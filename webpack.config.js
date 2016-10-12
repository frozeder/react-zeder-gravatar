var path = require("path");

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './build',
    filename: 'react-zeder-gravatar.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8099,
    hot: true,
    contentBase: "./www/",
  },
  devtool : 'eval'
};
