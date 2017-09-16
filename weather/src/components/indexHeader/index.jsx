import './index.less'
import {Link} from  'react-router-dom'
class  IndexHeader extends React.Component{
    render(){
        return(
            <div  className="index-header">
                 <div className="zhanwei">占位</div>
                 <div className="city iconfont" >&#xe630; {this.props.city}</div>
                 <Link to={this.props.url} > <span className="iconfont">&#xe60d;</span></Link>
            </div>
        )
    }
}

export default IndexHeader;