const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    port: 8564
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
        test: /\.(gif|png|jp?g|svg)$/i,
        type: 'asset/resource'
      },
    ],
  },
};
