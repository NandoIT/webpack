const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context:  path.resolve(__dirname, '..', 'src'),
  entry: {
    bundle: "./main.js"
  },
  output: {
    path: path.resolve(__dirname, '..', "dist"),
    filename: "assets/js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/views/index.html')
    })
  ]
}
