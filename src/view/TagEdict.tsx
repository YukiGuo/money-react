import React from 'react';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
const Wrapper=styled.div`
        height: 100vh;
        background-color: #eeeeee;
        .title {
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px 10px;
            background-color: #ffffff;
            margin-bottom: 5px;
            >button {
                background: transparent;
                border: solid blue 1px;
                padding:6px 8px;
                font-size: 14px;
                color: blue;
            }
          .link{
              color: #333;
              text-decoration: none;
          }
          span {
                flex-grow: 1;
                text-align: center;
            }
        }
        >.input {
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        padding-left: 16px;
        height: 40px;
        background-color: white;
        >.name{
           display: flex;
            align-items: center;
           // min-width: 40px;
        }
        > input {
            padding-left: 5px;
            border: none;
            &:focus{
            outline: none;
            }
        }
    }
   >.btnWrapper{
   display: flex;
   justify-content: center;
   }
        >.tagWrap{
            margin-top:50px ;
            text-align: center;
        }
`;
const TagEdict: React.FC=()=>{
    return(
        <Wrapper>
            <div className="title">
                <Icon name="arrowleft"/>
                <span>编辑标签</span>
                <button>保存</button>
            </div>
            <label className="input">
                <span className="name">标签名:</span>
                <input
                       type="text"/>
                </label>
            <div className="btnWrapper">
                  <Button> 删除标签</Button>
            </div>
        </Wrapper>
    )
};
export {TagEdict};
