import './index.less';
//获取当前天气
class  IndexNow  extends React.Component{

    render(){
        return(
            <div className="index_n_w">
                <div className="index_n_w_t">
                        <div className="index_n_w_l">
                            {this.props.nowWeather&&this.props.nowWeather.tmp}°
                        </div>
                        <div className="index_n_w_r">
                                <div className="index_n_w_r_img">
                                    <img src={"https://cdn.heweather.com/cond_icon/"+((this.props.nowWeather.cond&&this.props.nowWeather.cond.code)|| '999')+".png"} alt=""/>
                                </div>
                                <div >{this.props.nowWeather.cond&&this.props.nowWeather.cond.txt}</div>
                                <div >{this.props.forecastWeather[0]&&this.props.forecastWeather[0].tmp.min}°~ {this.props.forecastWeather[0]&&this.props.forecastWeather[0].tmp.max}°</div>
                        </div>
                </div>

            </div>
        )
    }
}

export default IndexNow;