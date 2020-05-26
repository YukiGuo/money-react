import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

import Icon from './Icon';


require ('icons/tag.svg')
const NavWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
text-align: center;
line-height: 30px;
box-shadow:0 0 3px rgba(0,0,0,0.25);
 >.item{
 display: inline-flex;
 flex-direction: column;
 width: 25%;
 align-items: center;
 text-align: center;
 padding:14px;
 }
`;
function Nav() {
return(
    <NavWrapper>
            <Link to="/money" className="item">
                <Icon name="money"/>
                <span>记账</span>
            </Link>

            <Link to="/tags" className="item">
                <Icon name="tag"/>
                <span>标签</span>
            </Link>
        <Link to="/bill" className="item">
            <Icon name="bill"/>
            <span>账单</span>
        </Link>
            <Link to="/statistics" className="item">
                <Icon name="statistics"/>
                <span>统计</span>
            </Link>


    </NavWrapper>
)
}
export default Nav;