import './index.less';
import TimeWeather from "../../../components/timeWeather/index";
import ForecastWeather from "../../../components/forecasWeather/index";
var week={
    1:'星期一',
    2:'星期二',
    3:'星期三',
    4:'星期四',
    5:'星期五',
    6:'星期六',
    0:'星期天'
}
class IndexForecastWeather  extends React.Component{
    render(){
        return(
            <div className="forecastWeather">
                <div className="nowstate">
                    <div>预报</div>
                    <div>
                         <span className="now">今天</span>
                         <span>{week[(new Date()).getDay()]}</span>
                    </div>
                </div>
                <TimeWeather  hourlyForecast={this.props.hourlyForecast} />
                <div className="forecastWeather" >
                    { this.props.forecastWeather.map((v,i)=>{
                            return <ForecastWeather   tu={v.cond&&v.cond.code_d}  max={v.tmp&&v.tmp.max}  min={v.tmp&&v.tmp.min}  week={week[(new Date(v.date)).getDay()]}   key={i} />
                        }
                    )}
                </div>


            </div>
        )
    }
}

export default IndexForecastWeather;