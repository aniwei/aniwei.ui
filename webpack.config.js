var webpackServer = require('webpack-dev-server'),
    webpack       = require('webpack'),
    path          = require('path');

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

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader'
      }, {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loaders: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(png|jpg|ttf|woff)$/,
        loaders: 'file-loader'
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

