//I, Bobby Filippopoulos, 000338236 verify that this is my work and only my work
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import "./index.css";

render(
 <Router history={browserHistory} routes={routes} />,
 document.getElementById('root')
);
