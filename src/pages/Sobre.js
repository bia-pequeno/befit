import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import banner from '../assets/banner.png'
import AppStore from '../assets/appstore.png'
import GooglePlay from '../assets/googleplay.png'
import Doblephone from '../assets/doblephone.png'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;900&family=Montserrat+Alternates:ital,wght@0,500;1,200&family=Montserrat:ital,wght@0,200;1,600&family=Raleway:ital,wght@0,100;0,400;1,200;1,400&family=Rubik:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;900&family=Montserrat+Alternates:ital,wght@0,500;1,200&family=Montserrat:ital,wght@0,200;1,600&family=Raleway:ital,wght@0,100;0,400;1,200;1,400&family=Rubik:wght@300;600&display=swap');
}
body{
    background-color: #D9D9D9;
}
`
const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  h1{
    margin-bottom: 3vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3em;
  }
  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    span{
        color: #FFFFFF;
        font-size: 3em;
        margin-bottom: 6vh;
    }
    h3{
        margin-top: 3vh;
        font-size: 4.7em;
    }
  }
`
const DivBanner = styled.div`
  color: #000000;
  display: flex;
  justify-content: space-between;
  background-image: url(${banner});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 15vh;
  width: 65vw;
  height: 35vh;
  z-index: 0;
`
const Text = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 4vh;
   width: 65vw;
   line-height: 40px;
   font-size: 1.1em;
`
const Section2 = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #E7E3FC;
  height: 75vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  h2{
    font-size: 2em;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 35px;
    font-style: italic;
    color: #0A0A0A;
    background-color: transparent;
  }
  span{
    font-weight: 900;
    font-size: 45px;
    background-color: transparent;
  }
  p{
    width: 35vw;
    color: #424242;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    background-color: transparent;
  }
 
`
const Father = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 background-color: transparent;
`
const Logo = styled.div`
 display: flex;
 background-color: transparent;

 img{
    width: 12vw;
    margin-left: 5vw;
    margin-right: 5vw;
    
  }
  &:hover{
      cursor: pointer;
    }

`
const DivPhone = styled.div`
 display: flex;
 align-items: center;
 background-color: transparent;
 margin-top: 20vh;
 img{
  width: 30vw;
 height: 60vh;
 background-color: transparent;
 margin-left: 5vw;
 }
`
const Faixa = styled.div`
  display: flex;
  align-items: center;
  background-color: #424242;
  width: 45vw;
  height: 35vh;
  margin-bottom: 5vh;
  border-radius: 20px 25px 20px 25px;
`

export default class App extends React.Component{
    render(){
        return(
            <>
            <GlobalStyle/>
            <Section>
                <DivBanner>
                    <h1>Sobre nós</h1>
                    <div>
                      <span><h2>BE</h2></span>
                      <h3>FIT</h3>  
                    </div>
                    
                </DivBanner>
                <Text>
                    <p>Temos como objetivo influenciar as pessoas , e ajuda las a alcançar suas metas de peso e nutrição de maneira fácil e intuitiva. Fornecendo informacoes de dieta e treino de acordo com sua necessidade.</p>
                    <p>Monitore o progresso de suas metas de nutrição, exercícios, perda de peso e consumo de água com o BeFit. Usar este app multifuncional de saúde e monitor de alimentos é como ter um nutricionista, um planejador de refeições e um diário de alimentação com você o tempo todo.</p>
                    <p>O BeFit é mais que um site de dietas. Ele é um site de saúde que te ajuda a aprender sobre seus hábitos, ver como você come, fazer escolhas de alimentação mais inteligentes, encontrar motivação e apoio, e alcançar suas metas.</p>
                    <p>O usuário também terá permissão para criar seus treinos e suas dietas e compartilhar com nossa comunidade para que outros usuários consigam utilizar.</p>
                </Text>
            </Section>
            <Section2>
              <Father>
                <h2><span>BEFIT</span> App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec elementum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Aliquam id quam augue. Cras nulla est, lacinia sit amet purus at, interdum gravida augue. Nam sed pretium.</p>
                <Logo>
                  <img src={GooglePlay} alt='logo do google play'/>
                  <img src={AppStore} alt='logo da app store'/>
                </Logo>
              </Father>
              <DivPhone>
                
                <Faixa><img src={Doblephone} alt=''/></Faixa>
              </DivPhone>
            </Section2>

            <Footer/>
            </>
        )
    }
}