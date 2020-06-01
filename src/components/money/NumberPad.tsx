import React, {useState} from 'react';
import styled from 'styled-components';
import {generateOutput} from './generateOutput';

const PadWrapper = styled.div`
margin-top: 6px;
button{
          position: relative;
        float: left;
        width: 25%;
        height: 50px;
      background-color: white;
     border: none;
      font-size: 16px;
      border: 0.5px solid #ccc;
      &.ok{
         height: 100px;
         float: right;
      }
         &.zero {
                    width: 50%;
                }
}
`;
const OutPut = styled.div`
  font-size: 30px;
            padding: 4px 16px;
            font-family: Consolas, monospace;
            text-align: right;
            border: 1px #ccc solid;
`;
type Props = {
   selected: number;
    onChange: (amount: number) => void
}
const NumberPad: React.FC<Props> = (props) => {
    const output = props.selected.toString();
    console.log(props.selected);
    let value :string;
    const setOutput = (output: string) => {
        if (output.length > 16) {
            value = output.slice(0, 16);
        } else if (output.length === 0) {
            value = '0';
        } else {
            value=output
        }
        props.onChange(parseFloat(value));
    };
    const x = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) return;
        if (text === 'ok') {
        }
        if (('0123456789.'.split('').concat(['清空', '删除'])).indexOf(text) >= 0) {
            setOutput(generateOutput(text, output));
        }
    };

    return <PadWrapper>
        <OutPut>{output}</OutPut>

        <div onClick={x}>
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
            <button className="ok">ok</button>
            <button className="zero">0</button>
            <button>.</button>
        </div>
    </PadWrapper>;
};

export default NumberPad;