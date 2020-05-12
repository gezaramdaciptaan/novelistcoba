import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../../app/landing-page';
import PortofolioPage from '../../app/portofolio-page';
import TopNovelPage from '../../app/top-page';
import BuyNowPage from '../../app/all';
import HistoryPage from '../../app/history-page';


class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/portofolio" component={PortofolioPage}/>
                <Route path="/topnovel" component={TopNovelPage} />
                <Route path="/buynow" component={BuyNowPage} />
                <Route path="/history" component={HistoryPage} />
            </Switch>
        );
    }
}

export default Router;