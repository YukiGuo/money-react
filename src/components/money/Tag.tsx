import React, {useState} from 'react';
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
    >button{
  width: 60px;
  padding: 4px 0;
    }
        > ul {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        margin-bottom: 20px;
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
                &.selected{
                background: red;
                }
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
const Tag:React.FC=()=> {
    const [tags,setTags]=useState<string[]>(['衣','食','住','行']);
    const [selectedTags,setSelectedTags]=useState<string[]>([]);
    const createTag = ()=>{
       const newTag=  window.prompt("新增的标签名：");
       if(newTag!==null){
           if(newTag==''){
               alert('标签名不能为空！')
           }else {
               if (tags.indexOf(newTag) < 0) {
                   setTags([...tags, newTag])
               } else {
                   alert('标签名重复了')
               }
           }
       }
    };
    const toggle=(tag: string)=>{
        if(selectedTags.indexOf(tag)>=0){
            setSelectedTags(selectedTags.filter(t=>t!==tag))
        }else{
            setSelectedTags([...selectedTags,tag])
        }
    };
    const ifSelected=(tag:string)=>{
      return   selectedTags.indexOf(tag) >= 0 ? 'selected':''
    };
    return (
        <TagWrapper>
            <ul>
                {tags.map(tag=>
                    <li
                        key={tag}
                        onClick={()=>{toggle(tag)}}
                        className={ifSelected(tag)}
                    >{tag}</li>
                )}
            </ul>
            <button onClick={createTag}>新增标签</button>
        </TagWrapper>
    );
};

export default Tag;