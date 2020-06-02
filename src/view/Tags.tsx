import Layout from '../components/Layout';
import React from 'react';
import {iconList, tagArray} from '../components/iconData';
import Icon from '../components/Icon';
import styled from 'styled-components';
const Label =styled.div`
      background-color: #fff;
      color: #999999;
            > .tagWrap {
                text-decoration: none;
                display: flex;
                justify-content: space-between;
                min-height: 30px;
                line-height: 30px;
                padding: 5px 15px;
                border-bottom: 1px solid #ddd;
                color: #999999;
                > span {
                    color: #333;
                    margin-right: auto;
                    margin-left: 16px;
                }
            }
            >.createTagWrapper{
            display: flex;
            justify-content: center;
          >.createTag {
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
        }
`;
const Tags = () => {
    return (
        <Layout>
            <Label>
                {tagArray.map(t =>
                        <div key={t.id} className="tagWrap">
                            <Icon name={t.icon}/>
                            <span className="oneLine">{t.name}</span>
                             <Icon name="arrowright"/>
                        </div>
                )}
                <div className="createTagWrapper">
                <button className="createTag">新建标签
                </button>
                </div>
            </Label>
        </Layout>
    );
};
export default Tags;