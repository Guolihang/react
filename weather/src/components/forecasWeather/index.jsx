import './index.less';
class ForecastWeather  extends React.Component{
    render(){
        return(

                <div className="week-box">
                    <div>{this.props.week}</div>
                    <div>
                        <img src={"https://cdn.heweather.com/cond_icon/"+(this.props.tu || '999')+".png"} alt=""/>
                    </div>
                    <div  className="tem">
                        <span>{this.props.min}°</span>&nbsp;&nbsp;
                        <span>{this.props.max}°</span>
                    </div>
                </div>


        )
    }
}



export default ForecastWeather;