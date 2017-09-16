import IndexHeader from "../../components/indexHeader/index";
import './index.less'
import  store from '../../lib/store'
import IndexNow from "./indexNowWeather/index";
import IndexForecastWeather from "./indexForecastWeather/index";
import Yubao from "./yubao/index";
import IndexFooter from "../../components/indexfooter/index";
class Index  extends React.Component{


    constructor(props){
        super(props);
        this.state={
            city:'西安',
            nowWeather:{},
            forecastWeather:[],
            hourlyForecast:[],
            basic:{}
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
        var dom = ReactDOM.findDOMNode(this);
        var cbg = dom.querySelector('.index-bg');
        var elm = document.body.scrollTop?document.body:document.documentElement;
        var offT = elm.scrollTop;
        cbg.style.webkitFilter = 'blur('+offT/40+'px)';
    }
    componentDidMount(){
        var that=this;
        var city =  localStorage.getItem('city');
        if(!city){

            var Geolocation = window.navigator.geolocation;
            Geolocation.getCurrentPosition(function(pos){
                var lat = pos.coords.latitude;
                var lot = pos.coords.longitude;
                store.getWeather(lot+','+lat,function(data){
                    //保存到 状态中
                    that.setState({
                        city:data['HeWeather5'][0].basic.city
                    })
                    city = data['HeWeather5'][0].basic.city;
                    getW()
                    //保存到 本地存储
                    localStorage.setItem('city',data['HeWeather5'][0].basic.city)
                })
            })


        }else{
            this.setState({
                city:city
            })
            getW()
        }



        function getW(){

            store.getWeather(city,function(data){
                var  d = data['HeWeather5'][0];
                that.setState({
                    nowWeather:d.now,
                    forecastWeather:d.daily_forecast,
                    hourlyForecast:d.hourly_forecast,
                    basic:d.basic
                })
            })
        }

        window.addEventListener('scroll', this.handleScroll)
    }


    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }





    render(){
        return(
                <div className="index-box">
                    <div className="index-bg"></div>
                    <IndexHeader  city={this.state.city} url="./list"/>
                    <IndexNow nowWeather={this.state.nowWeather}  forecastWeather={this.state.forecastWeather}   />
                    <IndexForecastWeather   forecastWeather={this.state.forecastWeather} hourlyForecast={this.state.hourlyForecast} />
                    <Yubao   nowWeather={this.state.nowWeather}  forecastWeather={this.state.forecastWeather} />
                   <IndexFooter  basic={this.state.basic}  />
                </div>
        )
    }
}

export  default  Index;