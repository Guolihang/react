
/*导入normalize.css  public.less*/
require('normalize.css');
import './static/public.less';
/*导入路由*/
import   R  from './routes';
ReactDOM.render(R,document.querySelector('#box'));