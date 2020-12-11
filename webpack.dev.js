const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'build')
  },
});
