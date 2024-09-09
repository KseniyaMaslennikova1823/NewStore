const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/, 
            use: ['style-loader', 'css-loader', 'sass-loader'], 
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          chunks: ['main']
        })
      ],


    devServer: {
        port: 8080,
        hot: "only",
        static: {
          directory: path.join(__dirname, './'), 
          serveIndex: true,
        },
        open: true, 
      }, 
      mode: 'development',
}