import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
width: 100%;
height: 56px;
display: flex;
align-items: center;
>span{
display: inline-flex;
height: 100%;
width: 50%;
justify-content: center;
align-items: center;
position: relative;
&.selected{
background: #eee;

&::after{
content:'';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 2px;
background: #333;
}
}
}
`;
type Props={
    selected:'+'|'-';
    onChange:(catalog:'+'|'-')=>void
}
const Catalog:React.FC<Props>=(props)=> {
    const catalogHash={ '+':'收入','-':'支出'};
    const catalog =props.selected;
    const [catalogList]=useState<('+'|'-')[]>(['+','-']);
    return(
        <Wrapper>
            {catalogList.map(t=>
            <span
                key={t}
                className={t===catalog?'selected':''}
                onClick={()=>props.onChange(t)}
            >
                {catalogHash[t]}</span>
            )}

        </Wrapper>
    )
};
export default Catalog;