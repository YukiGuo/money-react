import React from 'react';
import styled from 'styled-components';
const TagWrapper=styled.div`
        flex-grow: 1;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-top: 10px;
        background: white;
    margin-bottom: 4px;
        > ul {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        
            > li {
                width: 15vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-left: 4vw;
                margin-top: 5px;   
                background: #ccc;
                border-radius: 2px;
                padding:2px;
                > .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 25px;
                    width: 25px;
                    background: #F0F0F0;
                    border-radius: 50px;
                    color: #8C9098;
                    padding: 4px;
                    margin-bottom: 8px;
                }

                &.selected {
                    .icon {
                        color: white;
                        background: red;
                    }
                }
            }

        }
`;
function Tag() {
    return (
        <TagWrapper>
            <ul>
                <li>衣服</li>
                <li>住宿</li>
                <li>交通</li>
                <li>食物</li>
            </ul>
        </TagWrapper>
    );
}

export default Tag;