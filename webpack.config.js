const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    port: 8800,
    hot: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react']
        }
      }
    ]
  },
  performance: { hints: false }
};
