/*导入 BrowserRouter ,Route*/
import  {BrowserRouter as Router ,Route}  from  'react-router-dom';
/*导入页面*/
import Index from "../containers/index/index";
import List from "../containers/list/index";
import Add from "../containers/add/index";

/*定义路由*/

/*  路由出要加  basename="/weather"   设定基层目录*/
var R=<Router  basename="/weather" >
            <div>
                <Route  exact path='/' component={Index}/> {/* 就是表示仅改行  进入/   */}
                <Route  path='/list' component={List}/>
                <Route  path='/add' component={Add}/>
            </div>
      </Router>

export default R;