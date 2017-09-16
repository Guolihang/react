/**
 * Created by Administrator on 2017/8/15 0015.
 */
var path=require('path');
module.exports={
    entry:'./src/index.js',
    output: {
        path:path.join(__dirname,'build'),
        filename: "bundle.js"
    },
    module: {
      rules:[
          { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
          { test:/\.less$/, loader: 'style-loader!css-loader!less-loader!postcss-loader'},
          { test:/\.js?$/,exclude:/node_modules/,loader:'babel-loader',query:{presets:['latest']}},
          {test: /\.(png|jpg|gif|jpeg|bmp)$/, loader: 'url-loader?limit=10000&name=/images/[name].[ext]'},
          {test: /\.(svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'}
      ]
    }
}