var path = require('path');
module.exports = {
    entry:'./js/main.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: '/bundle'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [ 
                     'style-loader','css-loader', 'sass-loader'
                ]
            }
        ]
    }
};