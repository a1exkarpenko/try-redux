const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    }

    if (isProduction) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config
}

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
    entry: './index',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: optimization(),
    devServer: {
        port: 5000,
        open: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        proxy: {
            '/api/**': 'http://localhost:3000'
        },
    },
    devtool: !isProduction ? 'source-map' : false,
    plugins: [
        new ESLintWebpackPlugin({
            extensions: ['tsx', 'ts'],
        }),
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProduction,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].style.css',
        }),
        new HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    preset: ['@babel/preset-react'],
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'sass-loader'
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff2?|eot|ttf)/,
                use: ['file-loader'],
                dependency: {
                    not: ['url'],
                },
            },
        ],
    },
}
