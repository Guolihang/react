
weather
  --doc
  --src
    --index.jsx
    --components  存放组件  木偶组件
       ---indexHeader  记住在首页导入
           组价名称：index-header
           样式：@basePadding:15px;
                 @indexHeaderHeight:50px

     ---lib
         store.js
           baseUrl:
           type:
           key:

           store.getCityUrl=function(city,type=store.type){
             return  返回地址
           }

           store.getWeather=function(city,callback){
             var  url=this.getCity(city,'weather');
             this.get(url,callback)
           }

           store.getForecast=function(city,callback){
               var  url=this.getCity(city,'forcast');
                     this.get(url,callback)
           }

           store.get(url,callback){

           }


  future-box
      future-title
      span   预报
      span  星期天

      HourlyList
         hourlyList

         HouryItem
             hourly-item


             Forecastlist


    --containers  存放页面   智能组件
    --configs
      config.js
         {key:  }
    --routes
    --static
       --public.less

```


## 天气app
  ### 路由
   --index   /
   --list    /list
   --add     /add


a,button{
//去除a 标签和按钮按下的时候的半透明
	-webkit-tap-highlight-color:rgba(0,0,0,0)
}
```


## 环境配置
   生产环境依赖： react 、  react-router-dom    react-dom  normalize.css  

   开发环境依赖： webpack  webpack-dev-server style-loader   css-loader    postcss-loader    autoprefixer
   less  less-loader
   babel-core   babel-loader    babel-preset-latest   babel-preset-react
   url-loader   file-loader


插件

    open-browser-webpack-plugin
    html-webpack-plugin



webkit-filter 滤镜

历史记录只能在路由的组件里获取到

https://alloyteam.github.io
/AlloyTouch/website/demo.html


Geolocation


var Geolocation=window.navigator.geolcation

Geolocation.getCurrentPo



git init    初始化仓库
随便运行一个命令

  git push
  ## 添加仓库地址

git remote  add   origin   gh-pages    地址   (origin为默认分支）
## 从服务器下载内容

git  pull   origin  master
## 查看分支

git branch

### 创建分支
git branch  gh-pages

## 切换分支
git  checkout  gh-pages
switched   to branch  'gh-pages'


## git 提交流程

git add  *
git commit  -m 描述
git push



