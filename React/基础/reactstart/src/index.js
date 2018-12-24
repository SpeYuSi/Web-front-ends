import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import App from './App';

//加快react运行速度
import * as serviceWorker from './serviceWorker';

//将app组件渲染到root元素中
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
