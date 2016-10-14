import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import MainContainer from '../containers/MainContainer';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Resume from '../components/Resume';

import configureStore from '../stores/configureStore';
const store = configureStore();

var routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainContainer}>
                <IndexRoute component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>
);

export default routes;
