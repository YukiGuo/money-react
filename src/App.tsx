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
import {TagEdict} from './view/TagEdict';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/money" exact>
                    <Money/>
                </Route>
                <Route path="/tags" exact>
                    <Tags/>
                </Route>
                <Route path="/tags/:id" exact>
                    <TagEdict/>
                </Route>
                <Route path="/statistics" exact>
                    <Statistics/>
                </Route>
                <Route path="/bill" exact>
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