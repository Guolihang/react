import ListHeader from "../../components/listheader/index";
import ListCityWeather from "../../components/listCityWeather/index";
import  store from '../../lib/store'

class List  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            citys:['西安'],
            citysWeather:[]
        }
    }

    render(){

        return (<div className="city-list">
            <ListHeader history={this.props.history} title={'城市管理'} href={'/add'}/>

            <div >
                {this.state.citysWeather.map((v,i)=>{
                    return  <ListCityWeather    key={i} history={this.props.history} {...v}/>
                })}
            </div>


        </div>)

    }


    componentDidMount(){

        var that = this;
        var Citys = JSON.parse(localStorage.getItem('weatherCitys')||'[]');
        if(Citys.length==0){
            var currentCity = localStorage.getItem('city');
            Citys.push(currentCity);
            localStorage.setItem('weatherCitys',JSON.stringify(Citys));
            this.setState({citys:Citys});

        }else{
            Citys.forEach((v)=>{
                store.getNow(v,function(data){
                    var tmp=data['HeWeather5'][0]['now']&&data['HeWeather5'][0]['now']['tmp'] ;
                    if(tmp){
                        that.setState({
                            citysWeather:that.state.citysWeather.concat([{city: v,tmp:tmp}])
                        })
                    }

                })
            })
        }




    }


}

export  default  List;