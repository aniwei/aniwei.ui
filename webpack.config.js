var webpackServer = require('webpack-dev-server'),
    webpack       = require('webpack');

var webpackConfig = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/index.jsx'
    ]
  },
  output: { 
    path: __dirname + '/dist/js', 
    filename: 'bundle.js',
    publicPath: '/build/' 
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

var compiler = webpack(webpackConfig);

var server = new webpackServer(compiler, {
    contentBase:'static/',
    publicPath: "/build/"
});

server.listen(8080);

