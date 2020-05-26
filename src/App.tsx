import React from 'react';
import './index.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import UnFound from './view/Unfound';
import Money from './view/Money';
import Tags from './view/Tags';
import Bill from './view/Bill';
import Statistics from './view/Statistics';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Route path="/bill">
                    <Bill/>
                </Route>
                <Redirect exact from='/' to='/money'/>
                <Route path="*">
                    <UnFound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;