import React, { Component } from 'react';

import {AppNavbar, AppRoutes} from './components/';

class App extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <div className="main-content">
                    <AppRoutes/>
                </div>
            </div>
        );
    }
}

export default App;
