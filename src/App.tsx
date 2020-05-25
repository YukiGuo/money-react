import React from 'react';
import './index.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import Nav from 'components/Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;
const Main = styled.div`
flex-grow: 1;
overflow: auto;
`;

function App() {
    return (
        <Router>
            <Wrapper>
                    <Main>
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
                            <Redirect exact from ='/' to='/money' />
                            <Route path="*">
                                <UnFound/>
                             </Route>
                        </Switch>
                    </Main>
                    <Nav/>
            </Wrapper>
        </Router>
    );
}

function Statistics() {
    return <h2>Home</h2>;
}

function Money() {
    return <h2>About</h2>;
}

function Tags() {
    return <h2>Users</h2>;
}
function UnFound() {
    return <h4>该页面不存在</h4>;
}

export default App;