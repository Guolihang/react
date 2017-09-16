import './index.less'
class IndexFooter extends React.Component{
    render(){
        var t=new Date(this.props.basic.update && this.props.basic.update.loc);
        var time= (t.getHours()<=9?'0'+t.getHours():t.getHours())+':'+(t.getMinutes()<=9?'0'+t.getMinutes():t.getMinutes())
        return(
            <div className="indexfooter-box">
                <div className="indexfooter">
                    <span>中央气象台</span>
                    <span>{time}&nbsp;发布</span>
                </div>
            </div>
        )
    }
}

export default IndexFooter;