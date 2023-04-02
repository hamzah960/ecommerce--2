const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const { postcss } = require('autoprefixer');

module.exports = {
    entry: {
        'js/app': './src/index.js',
        'js/checkout': './src/js/checkout.js',
        'js/payment': './src/js/payment.js',
    },    
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // assetModuleFilename: 'images/[name].[ext]',
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: [
                    path.resolve(__dirname, './src/fonts'),
                ],
                generator: {
                    filename: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                exclude: [
                    path.resolve(__dirname, './src/images'),
                ],
                generator: {
                    filename: 'fonts/[name].[ext]',
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        // minimize: true,      هذه الاضافة تقوم بالتقليص في مود الانتاج واذا اردنا تفعيلها في مود التطوير نضيف هذا السطر
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        devMiddleware: {
            writeToDisk: true,
        },
        // compress: true,
        port: 5000,
        hot: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks:['js/app'],
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: './src/product.html',
            chunks:['js/app'],
        }),
        new HtmlWebpackPlugin({
            filename: 'checkout.html',
            template: './src/checkout.html',
            chunks:['js/app', 'js/checkout'],
        }),
        new HtmlWebpackPlugin({
            filename: 'payment.html',
            template: './src/payment.html',
            chunks:['js/app', 'js/checkout', 'js/payment'],
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            template: './src/search.html',
            chunks:['js/app'],
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',
            chunks:['js/app'],
        }),
    ],
}