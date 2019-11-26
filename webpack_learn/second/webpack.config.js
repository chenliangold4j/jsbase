const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        //__dirname nodejs全局变量
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },

    module: {
        rules: [
            {
                // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                            ,
                            name: '[path][name][hash:8].[ext]'
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name][hash:8].[ext]'
            //               }
            //         }
            //     ]
            // }
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}