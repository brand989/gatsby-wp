import React from "react"
import { connect, css, styled, } from "frontity"
import bgImage from "../../uploud/welcome-bg.jpg"
import Menu from "./menu"

const Header = ({ state }) => {
  return (
    <>
         <HeaderBlock>
            <Container>
            <div className="header__top">
             <Menu />
             <div class="header__right">
                <div class="header__entry entry-header">
                  <span class="header__icon _icon-user"></span>
                  <a href="#" class="header__right-link entry-header__link">Вход в личный кабинет</a>
                </div>
                <a href="tel:84952152737" class="header__call-us call-us">
                  <span class="header__icon _icon-call-us"></span>
                  <span  class="header__right-link call-us__phone">8-495-215-27-37</span>
                </a>
				      </div>
            </div>
              <div className="header">УПРАВЛЯЮЩАЯ КОМПАНИЯ PRODOM</div>
              <div className="headerPoints" >
                <p>надежность</p>
                <p>качество</p>
                <p>управление</p>
              </div>
              
            </Container>
        </HeaderBlock>

    </>
  )
}

export default connect(Header)


const HeaderBlock = styled.header`
min-height: 400px;
background-image:url(${bgImage});
border-width: 0 0 8px 0;
border-style: solid;
color: #197f53;

.header__top{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 67px 7px 87px;
  font-family: "RoadRadio";

  .header__right {
    -webkit-box-flex: 0;
        -ms-flex: 0 1 27.0096463023%;
            flex: 0 1 27.0096463023%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 16px;
  }
  
  .header__right-link {
    color: #fff;
    white-space: nowrap;
  }
  
  .header__icon {
    margin-right: 10px;
    color: #fff;
    font-size: 21px;
    -webkit-transition: color 0.3s ease 0s;
    -o-transition: color 0.3s ease 0s;
    transition: color 0.3s ease 0s;
  }
  
  .header__icon-phone {
    display: none;
  }
  
  .header__entry {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  
  .header__call-us {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

  .header{
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    font-family: BravoRG;
    letter-spacing: 17.9px;
    font-size: calc(20px + 88 * ((100vw - 320px)/ 1205));
  }
  .headerPoints {
      
      font-size: 25px;
  }

`


const Container = styled.div`
  max-width: 1525px;
    margin: 0 auto;
    padding: 0 15px;
`