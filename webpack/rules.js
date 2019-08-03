const path = require('path');
const config = require('config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = config.get('build.mode') === 'development';
const babelOptions = require('../babel/setup')({ dev: isDevMode });

const images = path.join(__dirname, '../node_modules/modul.markup.ui-kit/markup/images');

const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, require.resolve('../babel/helpers')],
        use: [
            {
                loader: 'babel-loader',
                options: Object.assign({
                    cacheDirectory: true,
                }, babelOptions),
            },
        ],
    },
    {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'images/[path][name].[ext]?[hash:hex:7]',
                    context: images,
                },
            },
        ],
    },
    {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[hash:hex:7].[ext]',
                },
            },
        ],
    },
    {
        test: /\.styl$/,
        use: [
            isDevMode ? {
                loader: 'style-loader',
            } : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDevMode,
                },
            },
            {
                loader: 'stylus-loader',
                options: {
                    'resolve url': true,
                    import: ['~nib/lib/nib/index.styl'],
                    preferPathResolver: 'webpack',
                },
            },
        ],
    },
    {
        test: /\.config$/,
        use: [
            {
                loader: 'inject-config-loader',
                options: {
                    field: 'front',
                },
            },
        ],
    },
];

module.exports = rules;
