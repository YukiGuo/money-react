import React from 'react';
import styled from 'styled-components';

const PadWrapper = styled.div`
margin-top: 6px;
>button{
          position: relative;
        float: left;
        width: 25%;
        height: 50px;
      background-color: white;
     border: none;
      font-size: 16px;
      border: 0.5px solid red;
}
`;
const OutPut = styled.div`
  font-size: 30px;
            padding: 4px 16px;
            font-family: Consolas, monospace;
            text-align: right;
            border: 1px #ccc solid;
`;
function NumberPad() {
    return <PadWrapper>
        <OutPut>0</OutPut>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>.</button>
        <button></button>
        <button>ok</button>
    </PadWrapper>;
}

export default NumberPad;