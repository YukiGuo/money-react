import React,{useState,useRef} from 'react';
import styled from 'styled-components';
const Wrapper=styled.div`
min-height:52px;
background:#ddd;
display:flex;
 align-items: center;
 >input{
 flex-grow:1;
 border:none;
 height:40px;
 background:#ddd;
padding:6px;
&:focus{
outline:none
}
 }
`;
type Props={
selected:string;
onChange:(note: string)=>void
}
const Note:React.FC<Props> =(props) => {
const note=props.selected;
const refInput =useRef<HTMLInputElement>(null)
const change =()=>{
if( refInput.current!==null ){
props.onChange(refInput.current.value)
}
}
return(
    <Wrapper>
         <span>备注</span>
         <input
         type='text' placeholder="请填写备注"
         defaultValue={note}
         onBlur={change}
         ref={refInput}
         ></input>
     </Wrapper>
)
}
export default Note;