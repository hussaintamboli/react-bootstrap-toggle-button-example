// Import Webpack npm module
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "public")
const SRC_DIR = path.resolve(__dirname, "src")

module.exports = {
  // Which file is the entry point to the application
  entry: SRC_DIR + "/index.js",
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Where to output the final bundled code to
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    sourceMapFilename: '[file].map',
    publicPath: "/public/"
  },
  devtool: 'inline-source-map',
  // Which mode
  mode: 'development',
  // redirect 404s to index.html
  devServer: {
    historyApiFallback: true
  },
  module: {
    // How to process project files with loaders
    rules: [
      // Process any .js or .jsx file with Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
   new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
}
