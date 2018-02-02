import * as React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Profile from "./Profile";

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    </main>
);

export default Router;