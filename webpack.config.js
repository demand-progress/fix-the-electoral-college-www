module.exports = {
    entry: './js/index.js',
    output: {
        filename: './js/bundle.js',
    },
    module: {
        loaders: [{
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'stage-0',
                ],
            },
            test: /\.js$/,
        }],
    },
    resolve: {
        extensions: ['', '.js', '.json'],
    },
};
