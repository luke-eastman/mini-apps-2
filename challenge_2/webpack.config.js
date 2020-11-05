const path = require('path');

module.exports = {
  entry: path.resolve('.', 'client', 'app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('.', 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
};