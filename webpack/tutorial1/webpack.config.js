const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports ={
      mode:"development",
      entry:"./src/index.js",
      // devtool:"none",
      output:{
        filename:"main.[contenthash].js",
        path:path.resolve(__dirname,"build")
      },
      plugins:[new HtmlWebpackPlugin({
            template:"./src/template.html"
      })],
      module:{
            rules:[
                  /* {
                        test:/\.css$/,
                        use:["style-loader","css-loader"]
                  } */
                  {
                        test:/\.scss$/,
                        use:[
                              "style-loader",//inject style into dom
                              "css-loader", // turn css into commonjs
                              "sass-loader" //turn ssass to css
                        ]
                  }
            ]
      }
}