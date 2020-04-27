var path = require("path")

module.exports = {
    entry: [
        './src/index.js',
        './src/index.css'
      ],
      output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
      },
      module: {
        rules: [
            { 
                test: /\.css$/, use:[ "style-loader", 'css-loader' ]
            },
            {
                test: /\.(js|jsx)$/, use:["babel-loader"]
            }
            ]
    },
     devServer: {
         compress: true,
         port: 8080
     }
}