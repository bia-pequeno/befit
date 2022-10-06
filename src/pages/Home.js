import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import mainBanner from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import phone from '../assets/base.png'
import verdura from '../assets/verduras.png'
import corrida from '../assets/corrida.png'
import AppStore from '../assets/appstore.png'
import GooglePlay from '../assets/googleplay.png'
import Doblephone from '../assets/doblephone.png'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: #D9D9D9;
    @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;900&family=Montserrat+Alternates:ital,wght@0,500;1,200&family=Montserrat:ital,wght@0,200;1,600&family=Raleway:ital,wght@0,100;0,400;1,200;1,400&family=Rubik:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;900&family=Montserrat+Alternates:ital,wght@0,500;1,200&family=Montserrat:ital,wght@0,200;1,600&family=Raleway:ital,wght@0,100;0,400;1,200;1,400&family=Rubik:wght@300;600&display=swap');
  }
  body{
    
  }
`
const Section = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 85vh;
`
const Divbanner = styled.div`
  display: flex;
  width: 25vw;
  justify-content: center;
  padding-top: 35vh;
  z-index: 1;
  background-color: transparent;
  h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2.3em;
    color: #FFFFFF;
    background-color: transparent;
  }
`

const Boxbanner = styled.div`
   display: flex;
   margin-top: 10vh;
   position: absolute;
   background-image: url(${mainBanner});
   background-size: contain;
   background-repeat: no-repeat;
   width: 65vw;
   height: 65vh;
   z-index: 0;
`
const Section2 = styled.section`
  display: flex;
  margin-top: 1vh;
  justify-content: center;
  flex-wrap: wrap;
`
const Sectionbox = styled.section`
  display: flex;
  margin-top: 1vh;
  margin-bottom: 10vh;
  justify-content: center;
  flex-direction: column;
`
const Phase = styled.div`
  font-size: 2em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #0A0A0A;
  text-align: center;
  display: flex;
  position: absolute;
`
const Span = styled.span`
  color: #3B24AD;
`
const Divb2 = styled.section`
  display: flex;
  margin-bottom: 10vh;
  p{
    display: flex;
    color: #FFFFFF;
    background-color: transparent;
    font-size: 3em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* margin-top: 5vh; */
    height: 15vh;
  }
  input{
    height: 5vh;
    width: 14vw;
    background-color: white;
    border-radius: 30px 35px 30px 35px;
    border: none;
    padding-left: 4.5vw;
  }
`
const Banner2 = styled.div`
   display: flex;
   margin-top: 20vh;
   background-image: url(${banner2});
   width: 65vw;
   height: 30vh;
   background-size: contain;
   background-repeat: no-repeat;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const Divb3 = styled.section`
  display: flex;
  position: relative;
  p{
    display: flex;
    color: #FFFFFF;
    background-color: transparent;
    font-size: 3em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 15vh;
  }
  input{
    height: 5vh;
    width: 14vw;
    background-color: white;
    border-radius: 30px 35px 30px 35px;
    border: none;
    padding-left: 4.5vw;
  }
`
const Banner3 = styled.div`
   display: flex;
   background-image: url(${banner3}) ;
   width: 132.5vh;
   height: 13vw;
   background-size: 70vw 14vw;
   background-repeat: no-repeat;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const Section3 = styled.section`
  display: flex;
  flex-direction: column;
  height: 180vh;
`
const Phone = styled.img`
  width: 20vw;
  margin-right: 3vw;
`

const Lorem = styled.div`
  display: flex;
  justify-content: center;
  h3{
    font-family: 'Montserrat', sans-serif;
    color: #9E9E9E;
  }
  h2{
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 45px;
  }
  p{
    width: 25vw;
    color: #424242;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    line-height: 30px;
  }
`
const Boxfit = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 15vh;
  h2{
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 45px;
}
  h3{
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 45px;
}
   button{
    font-size: 1em;
    width: 12vw;
    height: 5vh;
    border-radius: 20px 25px 20px 25px;
    background-color: #3B24AD;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    border: none;
    margin-top: 10vh;
    &:hover{
      cursor: pointer;
    }
}
`
const Divimg = styled.section`
  display: flex;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
img{
  width: 20vw;
  margin-left: 14vw;
  margin-right: 14vw;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}
p{
  background-color: #230F7F;
  width: 20vw;
  color: #FFFFFF;
  font-size: 1.3em;
  font-family: 'Raleway', sans-serif;
  &:hover{
      cursor: pointer;
    }
}
`
const Footer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #E7E3FC;
  height: 60vh;
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
 height: 50vh;
 background-color: transparent;
 margin-left: 5vw;
 }
`
const Faixa = styled.div`
  display: flex;
  align-items: center;
  background-color: #424242;
  width: 45vw;
  height: 30vh;
  margin-bottom: 10vh;
  border-radius: 20px 25px 20px 25px;
`

export default class App extends React.Component{
    render(){
        return(
            <>
            <GlobalStyle/>
            <Section>
                <Divbanner>
                    <h1>Seu Personal Personal Trainer </h1>
                </Divbanner>
                <Boxbanner></Boxbanner>
                
            </Section>
            <Section2>
                <Phase>
                    <h2>Treinos <Span>personalizados</Span> para você</h2>
                </Phase>
                <Sectionbox>
                  <Divb2>
                    <Banner2>
                        <p> Saiba mais sobre nossos treinos</p>
                        <input type='text' placeholder="Saiba mais"/>
                    </Banner2>
                  </Divb2>
                  <Divb3>
                    <Banner3>
                      <p> Saiba mais sobre nossas dietas</p>
                      <input type='text' placeholder="Saiba mais"/>

                    </Banner3>
                 </Divb3>
                </Sectionbox>
            </Section2>
            <Section3>
              <Lorem>
                <Phone src={phone} alt='phone base'/>
                <div>
                  <h3>sobre nós</h3>
                  <h2>BEFIT</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec elementum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Aliquam id quam augue. Cras nulla est, lacinia sit amet purus at, interdum gravida augue. Nam sed pretium. sub luna saltamus</p>
                </div>
              </Lorem>
              <Boxfit>
                <h2>SAIBA O QUE OFERECEMOS</h2>
                <Divimg>
                  <div>
                     <img src={verdura} alt="frutas e verduras"/>
                  <p>Dietas</p>
                  </div>
                 <div>
                  <img src={corrida} alt="corrida"/>
                  <p>Treinos</p>
                 </div>
                  
                </Divimg>
                <h3>Venha ser mais saudável</h3>
                <button>Comece agora</button>
              </Boxfit>
            </Section3>
            <Footer>
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
            </Footer>

            </>
        )
    }
}