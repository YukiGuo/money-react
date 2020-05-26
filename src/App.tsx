import React from 'react';
import './index.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';

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
                            <Redirect exact from ='/' to='/money' />
                            <Route path="*">
                                <UnFound/>
                             </Route>
                        </Switch>
        </Router>
    );
}

function Statistics() {
    return (
        <Layout>
            <h2>Statistics</h2>
        </Layout>
    );
}

function Money() {

    return (
        <Layout>
            <h2>Money</h2>
        </Layout>
    )
}
function Tags() {
    return (
        <Layout>
            <h2>Tags</h2>
        </Layout>
    )
}
function UnFound() {
    return <h4>该页面不存在</h4>;
}
function Bill() {
    return (
        <Layout>
            <h2>Bill</h2>
        </Layout>
    )
}
export default App;