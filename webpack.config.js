module.exports = {
    entry: __dirname + '/src/button.js',
    output: {
        path: __dirname + '/dist',
        filename: 'button.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
