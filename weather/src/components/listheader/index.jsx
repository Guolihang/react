import "./index.less";
import {Link} from "react-router-dom";
class ListHeader extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        /*this.props.history.goBack();*/
        this.props.history.push('/');

    }

    render(){
        return (<div className="list-header">
            <div className="iconfont" onClick={this.handleClick.bind(this)}>&#xe621;</div>
            <div >{this.props.title}</div>
            <Link className="iconfont" to={this.props.href}>&#xe602;</Link>
        </div>)
    }
}
export default ListHeader;