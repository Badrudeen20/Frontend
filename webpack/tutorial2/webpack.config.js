const path  = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
      mode:'development',
      //entry:path.resolve(__dirname,'src/index.js'),
      entry:{
            bundle:path.resolve(__dirname,'src/index.js')
      },
      // devtool:'source-map',
      plugins:[new HtmlWebpackPlugin({
            template:"./src/template.html"
      })],
      output:{
        path: path.resolve(__dirname,"dist"),
        filename:"[name]-[contenthash].js",
        clean:true,
        assetModuleFilename:'[name][ext]'
      },
      module:{
            rules:[
                  {
                        test:/\.js$/,
                        exclude:/node_modules/,
                        use:{
                              loader:'babel-loader',
                              options:{
                                    presets:['@babel/preset-env']
                              }
                        }
                  },
                  {
                        test:/\.(svg|png)$/i,
                        type:'asset'
                  }
            ]
      }
}