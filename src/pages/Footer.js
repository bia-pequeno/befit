import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Footer = styled.section`
  background-color: #0A0A0A;
  color: #FFFFFF;
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: center;
  div{
    display: flex;
    justify-content: center;
    h2{
        font-family: 'Rubik', sans-serif;
        font-style: italic;
        font-size: 35px;
        font-weight: 800;
    }
  }
  
`
const Linha = styled.div`
  border: white 1px solid;
  width: 40vw;
  margin-left: 29vw;
  margin-top: 2vh;
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  ul{
    display: flex;
    margin-right: 8vw;
    li{
        display: flex;
        margin-left: 8vw;
    }
    &:hover{
        cursor: pointer;
    }
    
  }
`

export default class App extends React.Component{
    render(){
        return(
            <>
             <Footer>
                <div>
                    <h2>BEFIT</h2>
                </div>
                <Linha></Linha>
                <Nav>
                    <ul>
                        <li>Dietas</li>
                        <li>Exercícios</li>
                        <li>Sobre</li>
                        <li>Conta</li>
                    </ul>
                </Nav>
            </Footer>
            </>
        )
    }
}