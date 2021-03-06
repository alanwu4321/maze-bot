const path = require('path')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { preprocess } = require('preprocess')

const meta = require('./package.json');


function fillManifest(content, path) {
    return preprocess(content.toString(), { env: process.env, meta: meta }, { type: 'js' })
}


module.exports = {
    mode: 'none',
    entry: {
        background: './src/background.js',
        content: './src/content.js',
        sidebar: './src/sidebar.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/extension')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        CopyWebpackPlugin([
            'src/content.css',
            'src/sidebar.html',
            'src/sidebar.css',
            { from: 'icons', to: 'icons' },
            { from: 'vendor/selectorgadget_combined.*', to: 'vendor', flatten: true },
            { from: 'vendor/fontawesome', to: 'vendor/fontawesome' },
            { from: 'vendor/reset.css', to: 'vendor' },
            { from: 'manifest.json', to: 'manifest.json', transform: fillManifest },
        ]),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}
