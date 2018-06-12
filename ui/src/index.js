import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory} from "react-router";
import Main from './components/main';

ReactDOM.render(  <Main />, document.getElementById('root'));
registerServiceWorker();
