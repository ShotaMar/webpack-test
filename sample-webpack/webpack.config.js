module.exports = {
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-react']
                }
            }

        ]
    }
}