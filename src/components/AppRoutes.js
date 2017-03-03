import React from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router'
import {IndexScene} from './../scenes/';

class AppRoutes extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/index"/>
                <Route path="/index" component={IndexScene}/>
            </Router>
        )
    }
}

export default AppRoutes;