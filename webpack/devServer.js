const path = require('path');
const config = require('config');

const devServer = {
    port: config.get('dev.port'),
    host: 'localhost',
    contentBase: path.join(__dirname, '..', config.get('build.buildPath')),
    stats: {
        all: false,
        colors: true,
        errors: true,
        warnings: true,
    },
    clientLogLevel: 'error',
    noInfo: true,
    logLevel: 'error',
    allowedHosts: [
        'developer.modulbank.ru',
        'localhost',
    ],
    historyApiFallback: true,
};

module.exports = devServer;
