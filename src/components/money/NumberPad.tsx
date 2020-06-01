import React, {useState} from 'react';
import styled from 'styled-components';

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

function NumberPad() {
    const [output, setOutput] = useState<string>('0');

    const x = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
     if (text===null) return;
            switch (text) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (output === '0') {
                        setOutput(text);
                    }else{
                        setOutput(output+text)
                    }
                    break;
                case '0':
                    break;
                case '.':
                    if(output.indexOf('.')>=0){
                        return;
                    }else{
                        setOutput(output+text)
                    }
                    break;
                case '删除':
                    if(output.length===1){
                        setOutput('0');
                    }else{
                        setOutput(output.slice(0,-1));
                    }
                    break;
                case'清空':
                    setOutput('0');
                case'ok':
                    break;
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
}

export default NumberPad;