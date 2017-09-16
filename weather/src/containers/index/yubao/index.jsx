import './index.less'
class Yubao extends React.Component{

    render(){
        return(

            <div className="yubao">
                <div className="yubao-left">
                    <img src={"https://cdn.heweather.com/cond_icon/"+((this.props.nowWeather.cond&&this.props.nowWeather.cond.code)|| '999')+".png"} alt=""/>
                </div>
                <div className="yubao-right">
                    <div className="yubao-list">
                        <span>今日预报</span>
                        <span>{this.props.nowWeather.cond&&this.props.nowWeather.cond.txt}</span>
                    </div>
                    <div className="yubao-list">
                        <span>体感温度</span>
                        <span>{this.props.nowWeather.fl}°</span>
                    </div>
                    <div className="yubao-list">
                        <span>空气湿度</span>
                        <span>{this.props.nowWeather.hum}°</span>
                    </div>
                    <div className="yubao-list">
                        <span>风向风力</span>
                        <span>{this.props.nowWeather.wind&&this.props.nowWeather.wind.dir}</span>
                        <span>{this.props.nowWeather.wind&&this.props.nowWeather.wind.sc}</span>
                    </div>

                    <div className="yubao-list">
                        <span>日出</span>
                        <span>{this.props.forecastWeather[0]&&this.props.forecastWeather[0].astro.sr}</span>
                    </div>
                    <div className="yubao-list">
                        <span>日落</span>
                        <span>{this.props.forecastWeather[0]&&this.props.forecastWeather[0].astro.ss}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Yubao;