import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

require('icons/tag.svg');
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
 justify-content: space-around;
 text-align: center;
 padding:8px;
 color: #333;
 >span{
 margin-top: 6px;
 }
 &.selected{
 color: #1296db;
 }
 }
`;

function Nav() {
    return (
        <NavWrapper>
            <NavLink to="/money" className="item" activeClassName="selected">
                <Icon name="money"/>
                <span>记账</span>
            </NavLink>

            <NavLink to="/tags" className="item" activeClassName="selected">
                <Icon name="tag"/>
                <span>标签</span>
            </NavLink>
            <NavLink to="/bill" className="item" activeClassName="selected">
                <Icon name="bill"/>
                <span>账单</span>
            </NavLink>
            <NavLink to="/statistics" className="item" activeClassName="selected">
                <Icon name="statistics"/>
                <span>统计</span>
            </NavLink>
        </NavWrapper>
    );
}

export default Nav;