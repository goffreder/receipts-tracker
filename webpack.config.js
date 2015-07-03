/*eslint-disable no-var */

var webpack = require('webpack');
var name = require('./package.json').name;
var description = require('./package.json').description;
var version = require('./package.json').version;

var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var useReactStyleWebpackPlugin = !true;

var preLoaders = {
    jsx: {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
    }
};

var loaders = {
    jsx: {
        test: /\.jsx?$/,
        exclude: /node_modules[\/\\]/,
        loaders: [
            'babel-loader?optional[]=es7.decorators'
        ]
    },
    css: {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    icon: {
        test: /\.(eot|woff2|ttf|svg|woff)$/,
        loader: 'url-loader'
    }
};

if (useReactStyleWebpackPlugin) {
    loaders.jsx.loaders.push(ReactStylePlugin.loader());
}

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,

    entry: './app/App.js',

    output: {
        path: '__build__',
        publicPath: '__build__',
        filename: 'build.js'
    },

    module: {
        preLoaders: [ preLoaders.jsx ],
        loaders: [
            loaders.jsx,
            loaders.css,
            loaders.icon
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: '"' + process.env.NODE_ENV + '"'
                },
                appData: {
                    name: '"' + name + '"',
                    description: '"' + description + '"',
                    version: '"' + version + '"'
                }
            }
        }),
        useReactStyleWebpackPlugin ? new ReactStylePlugin('build.css') : new ExtractTextPlugin('build.css'),
        new webpack.ProvidePlugin({
            mui: 'material-ui',
            React: 'react/addons',
            StyleSheet: 'react-style'
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

/*eslint-enable no-var */
