import Layout from '../components/Layout';
import React from 'react';
import {iconList, tagArray} from '../components/iconData';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
const Label =styled.div`
      background-color: #fff;
      color: #999999;
            > .tagWrap {
                >a{
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
            }
            >.createTagWrapper{
            display: flex;
            justify-content: center;
        }
`;
const Tags = () => {
    return (
        <Layout>
            <Label>
                {tagArray.map(t =>
                        <div key={t.id} className="tagWrap">
                            <Link to={'./tags/'+t.id}>
                            <Icon name={t.icon}/>
                            <span className="oneLine">{t.name}</span>
                            <Icon name="arrowright"/>
                            </Link>
                        </div>
                )}
                <div className="createTagWrapper">
                <Button>新建标签</Button>
                </div>
            </Label>
        </Layout>
    );
};
export default Tags;