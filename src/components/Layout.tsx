import styled from "styled-components"
import React from "react"
import Nav from "./Nav"

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;
const Main = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow: auto;
`;

type Props ={
    children: any
}
function Layout(props: Props) {
return(
    <Wrapper>
        <Main>
            {props.children}
        </Main>
       <Nav/>
    </Wrapper>

)

}
export default Layout;