module.exports = {
  entry: {
    lib : './src/gravatar.jsx',
    example : './example/example.jsx',
  },
  output: {
    filename: './[name]/index.js',
    library : 'react-zeder-gravatar',
    libraryTarget: 'umd'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        exclude : '/node_modules',
        loader : 'babel',
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8099,
    hot: true,
    contentBase: "./example",
  },
  devtool : 'eval'
};
