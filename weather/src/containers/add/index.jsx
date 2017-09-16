var cityArray = ['北京','上海','广州','深圳','西安','重庆','成都','天津'];
import "./index.less";
import CityList from "./subpages/cityList";
class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            citys:cityArray
        }
    }
    render(){
        return <div className="add-weather">
            <AddHeader history={this.props.history}/>
            <CityList citys={this.state.citys}/>
        </div>
    }


}

class AddHeader extends React.Component{

    addCity(){
        var weather=JSON.parse(localStorage.getItem('weatherCitys'));

        if((this.refs.inputCity.value!='')&& !weather.includes(this.refs.inputCity.value)){
            var citys = JSON.parse(localStorage.getItem('weatherCitys')||'[]');
            citys.push(this.refs.inputCity.value);
            localStorage.setItem('weatherCitys',JSON.stringify(citys));
            this.props.history.push('/list');
        }

    }

    render(){
        return (<div className="add-header">
            <span className="iconfont search">&#xe613;</span>&nbsp;<input type="text" placeholder="请输入城市名称" ref="inputCity"/>
            <span className="add-btn" onClick={this.addCity.bind(this)}>添加</span>
        </div>)
    }
}
export default Add;