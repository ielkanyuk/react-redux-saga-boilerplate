const path = require('path');
const config = require('config');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');
const devServer = require('./webpack/devServer');

const mode = config.get('build.mode');

module.exports = {
    mode,
    devtool: config.get('build.sourceMaps'),
    entry: {
        main: path.join(__dirname, 'src'),
    },
    output: {
        path: path.join(__dirname, config.get('build.buildPath')),
        publicPath: '/',
        filename: 'js/[name].js?[hash]',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },
            },
        },
    },
    performance: {
        hints: false,
    },
    resolve: {
        alias: {
            config: path.join(__dirname, 'src/dummy.config'),
        },
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
    module: {
        rules,
    },
    plugins,
    stats: devServer.stats,
    devServer,
};
