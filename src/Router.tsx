import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PersonView from './person/PersonView';

const Router = () => (
    <main className="layout-main">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/people" component={PersonView}/>
        </Switch>
    </main>
);

export default Router;