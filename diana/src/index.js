import React from "react";
import { render } from "react-dom";
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import Main from "./Main";
import registerServiceWorker from './registerServiceWorker';
//import App from './App';

const App = props => (
  <LocalizeProvider>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </LocalizeProvider>
);

render(<App />, document.getElementById("root"));
registerServiceWorker();