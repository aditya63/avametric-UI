const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('dist/style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {test: /\.js$/,
       exclude: /node_modules/,
       use: 'babel-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!resolve-url-loader!sass-loader' })
      },
      {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    proxy: {
      "/api/*": {
        target: "http://localhost:3001"
      },
      "*": {
        target: "https://www.avametric.com",
        headers: {
          'X-Forwarded-Proto': 'https'
        },
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
          if(req.method === 'GET' && !req.headers.accept.match(/json/i)) return true
        }
      }
    },
    stats: {
      hash: false,
      assets: false,
      version: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true
    }
  },
  devtool: 'sourcemap'
}
