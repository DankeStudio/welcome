var path = require('path');
module.exports = {
    entry: './views',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.js',
        // If you want to output a library, config
        libraryTarget: "var",
        library: "App"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel']
        }]
    },
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "redux": 'Redux',
        "react-redux": 'ReactRedux',
        "react-router": 'reactRouter'
    }
};