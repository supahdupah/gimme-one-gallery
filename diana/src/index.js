import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

window.React = React;

//ReactDOM.render(<Menu menuData={menuData} />, document.querySelector('#demo1 .demo-container'));

ReactDOM.render(  
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root')
);
// ReactDOM.render(<Menu menuData={menuData} submenuDirection="below" />, document.querySelector('#demo3 .demo-container'));
registerServiceWorker();