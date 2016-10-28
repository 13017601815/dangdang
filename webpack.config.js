var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports={
  entry:['./public/assets/app.js',hotMiddlewareScript],
  output:{
    // path:'./public',
    path:path.resolve('./public'),
    filename:'bundle.js',
    punlicPath:publicPath
  },
  module:{
    loaders:[
      //对代码中require的所有.html结尾的文件使用html-loader加载到js文件中
      //加载之后以字符串的方式展示
      {test:/\.html$/,loader:'html'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
