module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
       {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },
  postcss: () => {
    return [
      require('precss'),
      require('autoprefixer')
    ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: "eval",
  devServer: {
    contentBase: './dist',
    hot: true
  }
};