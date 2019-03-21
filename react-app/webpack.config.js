const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  devServer: {
    //contentBase: '../dist',
    compress: true,
    port: 9000
  }
};
