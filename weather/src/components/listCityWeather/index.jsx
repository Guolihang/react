import "./index.less";
class ListCityWeather extends React.Component{

    constructor(props){
        super(props);

    }
    handleClick(c){
        localStorage.setItem('city',c);
        this.props.history.push('/');
    }

   touchmove(city){
        var that=this;
      var citysWeather=JSON.parse(localStorage.getItem('weatherCitys'));
       citysWeather.forEach(function (v,i) {
           if(v==city){
               citysWeather.splice(i,1);
               console.log(citysWeather)
               localStorage.setItem('weatherCitys',JSON.stringify(citysWeather));
               location.reload();
           }
       })

   }
    render(){
        return (<div className="list-city-weather"  onTouchMove={this.touchmove.bind(this,this.props.city)}   onClick={this.handleClick.bind(this,this.props.city)}>
            <div>{this.props.city}</div>
            <div>{this.props.tmp}°</div>
        </div>)
    }

}
export default ListCityWeather;