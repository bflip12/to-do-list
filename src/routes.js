import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import ToDoContainer from './containers/ToDoContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import HelpContainer from './containers/HelpContainer';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={ToDoContainer} />
    <Route path="/AboutContainer" component={AboutContainer} />
    <Route path="/ContactContainer" component={ContactContainer} />
    <Route path="/HelpContainer" component={HelpContainer} />
  </Route>
);
