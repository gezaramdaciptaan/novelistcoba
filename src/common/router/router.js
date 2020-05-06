import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../../app/landing-page';
import PortofolioPage from '../../app/portofolio-page';
import TopNovelPage from '../../app/top-page';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/portofolio" component={PortofolioPage}/>
                <Route path="/topnovel" component={TopNovelPage} />
            </Switch>
        );
    }
}

export default Router;