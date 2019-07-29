module.exports = {
    entry: {
        index: "./src/scripts/index.js",
    },
    output: {
        filename: "dist.js",
        path: __dirname
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    }
}