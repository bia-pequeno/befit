import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;900&family=Montserrat+Alternates:ital,wght@0,500;1,200&family=Montserrat:ital,wght@0,200;1,600&family=Raleway:ital,wght@0,100;0,400;1,200;1,400&family=Rubik:wght@900&display=swap');  
}
body{
    background-color: #C2C2C2;
}
`
const Line = styled.div`
   border: black 1px solid;
`
const Section = styled.section`
   display: flex;
   justify-content: center;
   margin-top: 10vh;
   margin-bottom: 10vh;
`
const Boxlogin = styled.div`
   display: flex;
   width: 45vw;
   height: 80vh;
   background-color: #D9D9D9;
   flex-direction: column;
   h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
   }
`
const Title = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 10vh;
`
const Barra = styled.div`
    border: 2px black solid;
    border-radius: 30px 35px 30px 35px;
    width: 27vw;  
`
const Cor = styled.div`
  background-color: #3918D9;
  border-radius: 30px 35px 30px 35px;
  width: 8vw;
  height: 2vh;
  z-index: 1;
`
const Inputs = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'Montserrat', sans-serif;
   div{
    margin-top: 10vh;
    h4{
        font-size: 0.9em;
        line-height: 28px;
    }
     p{
        color: #7288FF;
        font-size: 0.6em;
        line-height: 28px;
   }
   }
   input{
    width: 25vw;
    height: 5vh;
    font-size: 1em;
    padding-left: 1vw;
    border: none;
    flex-wrap: wrap;
   }
  
`
const Boxbutton = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 6vh;
   div{
    display: flex;
   }
`
const Button1 = styled.button`
    color: #FFFFFF;
    background-color: #3918D9;
    border: 1px solid #000000;
    width: 10vw;
    height: 6vh;
    margin-bottom: 3vh;
    margin-right: 3vw;
    font-size: 1em;
    font-weight: 700;   
`
const Button2 = styled.button`
    color: #000000;
    background-color: #D9D9D9;
    border: 1px solid #000000;
    width: 10vw;
    height: 6vh;
    font-size: 1em;
    font-weight: 700;
`

export default class App extends React.Component{
    render(){
        return(
            <>
            <GlobalStyle/>
            <Line></Line>
            <Section>
                <Boxlogin>
                    <Title>
                        <div>
                            <Barra>
                                <Cor></Cor>
                            </Barra>
                        </div>
                        
                    </Title>
                    <Inputs>
                        <div>
                             <h4>SEU EMAIL</h4>
                             <input type='email' />
                             <h4>SENHA</h4>
                             <input type='password' />
                             <h4>CONFIRMAR SENHA</h4>
                             <input type='password' />
                        </div>
                    </Inputs>
                    <Boxbutton>
                        <div>
                            <Button1>VOLTAR</Button1>
                            <Button2>PROXIMO</Button2>
                        </div>
                    </Boxbutton>  
                </Boxlogin>
            </Section>
            <Footer/>
            </>
        )
    }
}