import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
text-align: center;
line-height: 30px;
box-shadow:0 0 3px rgba(0,0,0,0.25);
>ul{
width: 100%;
 >li{
 display: inline-flex;
 width: 33.3333%;
 align-items: center;
 text-align: center;
 padding:18px;
 }
}
`;
function Nav() {
return(
    <NavWrapper>
    <ul>
        <li>
            <Link to="/money">记账</Link>
        </li>
        <li>
            <Link to="/tags">标签</Link>
        </li>
        <li>
            <Link to="/statistics">统计</Link>
        </li>
    </ul>
    </NavWrapper>
)
}
export default Nav;