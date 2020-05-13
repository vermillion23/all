const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin('main.css')],
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                { loader: MiniCssExtractPlugin.loader },
                'css-loader',
                'sass-loader'
            ],
        }, ],
    },
};