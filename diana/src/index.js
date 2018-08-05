import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './i18n';

window.React = React;

//ReactDOM.render(<Menu menuData={menuData} />, document.querySelector('#demo1 .demo-container'));

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Menu menuData={menuData} submenuDirection="below" />, document.querySelector('#demo3 .demo-container'));
registerServiceWorker();