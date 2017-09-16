/**
 * Created by Administrator on 2017/8/16.
 */
var config=require('../configs/config.js');
var baseUrl='https://free-api.heweather.com/v5/';//地址句柄
var key=config.key; //秘钥
var store={};


store.getCityUrl=function(city ,type){
    /*https://free-api.heweather.com/v5/now?city=xian&key=93b5526475bc481880116e5af627a46d*/
    return  baseUrl+type+'?city='+city+'&key='+key;
}

store.getWeather=function(city,callback){
    var  url=this.getCityUrl(city,'weather');
    this.get(url,callback)
}


store.getforecast=function(city,callback){
    var  url=this.getCityUrl(city,'forecast');
    this.get(url,callback)
}


store.getNow = function(city,callback){
    var url = this.getCityUrl(city,'now');
    this.get(url,callback);
};


store.get=function (url,callback) {
    var xml=new XMLHttpRequest();
    xml.open('get',url,true);
    xml.send();
    xml.onreadystatechange=function () {
        if(xml.readyState==4){
            if(xml.status==200){
                 var data=JSON.parse(xml.response);
                 callback(data);
            }
        }
    }
}

module.exports=store;