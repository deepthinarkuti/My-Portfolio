import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import WorkExperience from './workexperience';
import Projects from './projects';

//Router to route the pages

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/workexperience" component={WorkExperience} />
        <Route exact path="/projects" component={Projects} />
    </Switch>
)

export default Main;