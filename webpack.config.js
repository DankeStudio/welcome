module.exports = {
    entry: [
        './views/index.jsx'
    ],
    output: {
        path: __dirname + '/public/',
        publicPath: "/public/",
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx-loader?harmony'] }
        ]
    }
};