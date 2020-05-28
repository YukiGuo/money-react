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
const Note:React.FC =() => {
const [note,setNote]=useState<string>('');
const refInput =useRef<HTMLInputElement>(null)
const change =()=>{
if( refInput.current!==null ){
    setNote(refInput.current.value)
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