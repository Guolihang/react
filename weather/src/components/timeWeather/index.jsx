import './index.less'
class TimeWeather  extends React.Component{
    render(){
        return(
            <div className="timeweather-box">
                { this.props.hourlyForecast.map((v,i)=>{

                    if(i<=4){
                        var t=v.date;
                        if(t.slice(11,12)==0){
                            t=t.slice(12)
                        }else {
                            t=t.slice(11)
                        }
                        return <TimeWeatherList  tmp={v.tmp} tu={v.cond&&v.cond.code} time={t}  key={i}/>
                    }

                 }


                    )}
            </div>
        )
    }
}


class  TimeWeatherList extends React.Component{
    render(){
        return(
            <div className="time-weather-list">
                 <div>{this.props.time}</div>
                 <div><img src={"https://cdn.heweather.com/cond_icon/"+(this.props.tu || '999')+".png"} alt=""/></div>
                 <div>{this.props.tmp}°</div>
            </div>
        )
    }
}
export default TimeWeather;