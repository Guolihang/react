import {Link} from "react-router-dom";
import './cityList.less'
class CityList extends React.Component{

    addCity(c){

        var weather=JSON.parse(localStorage.getItem('weatherCitys'));
        if(!weather.includes(c)) {
            var citys = JSON.parse(localStorage.getItem('weatherCitys') || '[]');
            citys.push(c);
            localStorage.setItem('weatherCitys', JSON.stringify(citys));
        }
    }

    render(){
        return (<div className="city-lists">
            <div className="city-list-header">
                热门城市
            </div>
            <div className="city-list">
                {this.props.citys.map((v,i)=>{
                    return  <Link to="/list" key={v} className="a"   onClick={this.addCity.bind(this,v)}>{v}</Link>
                })}
            </div>
        </div>)
    }


}
export default  CityList;