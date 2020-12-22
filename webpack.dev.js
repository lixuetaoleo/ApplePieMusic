const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new ESLintPlugin({
      // Plugin options
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      // formatter: require.resolve('react-dev-utils/eslintFormatter'),
      eslintPath: require.resolve('eslint'),
      context: path.resolve(__dirname, 'src'),
      cache: false,
      // ESLint class options
      cwd: path.resolve(__dirname),
      resolvePluginsRelativeTo: __dirname,
      failOnWarning: false,
      quiet: true,
      baseConfig: {
        extends: [require.resolve('eslint-config-react-app/base')],
      },
    }),
  ],
  devServer: {
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
    overlay: {
      errors: true,
    },
    // contentBase: path.join(__dirname, 'build')
  },
});
