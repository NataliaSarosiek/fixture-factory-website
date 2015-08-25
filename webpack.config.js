var path = require('path');
var webpackConf = require('peters-toolbelt').webpack;

var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [];
plugins.push(new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './client/index.html'
}));

var appEntry;

if (process.env.NODE_ENV === 'production') {
  appEntry = './client';
} else {
  appEntry = ['webpack/hot/dev-server', './client'];
}


var conf = new webpackConf({
                entry: appEntry,
                output: {
                    path: path.join(__dirname, '/dist'),
                    filename: 'index.js'
                },
                resolve: {
                   alias: {
                       'react': __dirname + '/node_modules/react',
                       'react/addons': __dirname + '/node_modules/react/addons',
                   }
                },
                plugins: plugins
            })
            .iNeedReact()
            .iNeedBootstrap()
            .iNeedSCSS()
            .iNeedInlineSVGs()
            .getConfig();

module.exports = conf;
