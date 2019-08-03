const nib = require('nib');
const path = require('path');
const config = require('config');
const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

const buildNumber = process.env.BUILD_NUMBER || '';
const BUILD_META_TAG = `<meta build-number="${buildNumber}" build-date="${(new Date()).toLocaleString()}">`;
const mode = config.get('build.mode');
const progress = config.get('build.progress');
const isDevMode = mode === 'development';

const plugins = [
    new WebpackChunkHash(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.ejs'),
        favicon: path.join(__dirname, '../node_modules/modul.markup.ui-kit/markup/images/favicon.ico'),
        templateParameters: {
            BUILD_META_TAG,
        },
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            stylus: {
                'resolve url': true,
                use: [nib()],
                import: ['~nib/lib/nib/index.styl'],
                preferPathResolver: 'webpack',
            },
        },
    }),
    new MiniCssExtractPlugin({
        filename: isDevMode ? 'css/[name].css' : 'css/[name].css?[contenthash]',
        chunkFileName: isDevMode ? 'css/[id].css' : 'css/[id].css?[hash]',
    }),
    new webpack.ProvidePlugin({
        babelHelpers: require.resolve('../babel/helpers'),
    }),
];

if (path.basename(require.main.filename) === 'webpack-dev-server.js') {
    plugins.push(new OpenBrowserPlugin({ url: config.get('dev.url') }));
} else {
    plugins.push(new CleanWebpackPlugin(config.get('build.buildPath'), {
        root: path.join(__dirname, '..'),
        verbose: false,
    }));
}

if (progress) {
    plugins.push(new SimpleProgressWebpackPlugin({ format: progress }));
}

module.exports = plugins;
