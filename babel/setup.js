module.exports = ({ jest, dev } = {}) => {
    const plugins = [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-do-expressions',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-logical-assignment-operators',
        ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
        '@babel/plugin-proposal-numeric-separator',
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        ['@babel/plugin-proposal-optional-chaining', { loose: false }],
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-transform-runtime',
    ];

    const presets = [
        '@babel/preset-react',
        ['@babel/preset-env', {
            modules: jest ? 'commonjs' : false,
            useBuiltIns: 'entry',
            targets: {
                browsers: [
                    'Chrome >= 49',
                    'Firefox >= 45',
                    'IE >= 11',
                    'Safari >= 10',
                    'Opera >= 43',
                    'Edge >= 14',
                ],
            },
        }],
    ];

    if (!jest) {
        plugins.push('@babel/external-helpers');
    }

    if (dev) {
        plugins.push('react-hot-loader/babel');
    }

    return {
        plugins,
        presets,
    };
};