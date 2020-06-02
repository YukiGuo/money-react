
import styled from 'styled-components';
import React from 'react';

const Wrapper=styled.div`
>button{
        font-size: 14px;
        height: 40px;
        border: none;
        background-color: #bbb;
        text-align: center;
        padding: 0 16px;
        color: #fff;
        border-radius: 5px; 
        margin-top: 32px; 
        }
`;

const Button: React.FC=(props)=>{
    return(
      <Wrapper>
          <button>{props.children}</button>
      </Wrapper>
    )
};
export {Button}