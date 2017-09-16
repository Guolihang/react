/**
 * Created by Administrator on 2017/8/15 0015.
 */
// postcss-loader 为CSS3代码自动添加适应不同浏览器的CSS前缀 
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}