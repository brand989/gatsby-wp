import React from "react"
import { connect, css, styled, } from "frontity"
import bgImage from "../../uploud/welcome-bg.jpg"
import logo from "../../uploud/logo.svg"
import Menu from "./menu"

const Header = ({ state }) => {
  return (
    <>
         <HeaderBlock>
            <Container>
            <div class="header__top">
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
              
            <div class="header__bottom">
              <div class="header__hero hero-header">
                <div class="hero-header__title">
                  <h2>Управляющая компания ProDom</h2>
                </div>
                <div class="hero-header__description">
                  <div class="hero-header__label"><p>надежность</p></div>
                  <div class="hero-header__label"><p>качество</p></div>
                  <div class="hero-header__label"><p>управление</p></div>
                </div>
                <div class="hero-header__content">
                  <div class="hero-header__about-us"><span>О</span>существляем полный цикл технического обслуживания объектов недвижимости</div>
                  <div class="hero-header__logo logo">
                    <img src={logo} alt="" /> 

                    <div class="logo__name logo__name_top">
                      pro
                    </div>
                    <div class="logo__name logo__name_bottom">
                      dom
                    </div>
                  </div>
                </div>
              </div>
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

  .hero-header__title {
    margin: 0px 0px 0.0277777778em 0px;
    color: #197f53;
    font-size: 108px;
    text-align: center;
    text-transform: uppercase;
    font-family: "BravoRG";
    letter-spacing: 17.9px;
  }
  
  .hero-header__description {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin: 0px 0px 1.5217391304em 0px;
    margin-bottom: 75px;
    color: #197f53;
    font-size: 46px;
    font-weight: 300;
    letter-spacing: 1.14px;
  }
  
  .hero-header__label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-weight: 300;
  }
  
  .hero-header__label:not(:last-child) {
    -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
  }
  
  .hero-header__label:not(:last-child)::after {
    content: "";
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 230px;
    height: 1px;
    background-color: #197f53;
  }
  
  .hero-header__label:not(:last-child) p {
    margin-right: 25px;
  }
  
  .hero-header__label:not(:first-child) {
    margin-left: 25px;
  }
  
  .hero-header__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding-right: 177px;
  }
  
  .hero-header__about-us {
    max-width: 790px;
    padding: 5.5869565217em 0px 3.0869565217em 0px;
    -ms-flex-item-align: end;
        align-self: flex-end;
    color: #197f53;
    font-size: 46px;
    font-weight: 300;
    letter-spacing: 1.14px;
  }
  
  .hero-header__about-us strong {
    font-size: 95px;
    letter-spacing: 2.37px;
  }
  
  .hero-header__about-us::before {
    content: "";
    width: 59px;
    height: 4px;
    background-color: #197f53;
    display: block;
    margin-bottom: 65px;
  }
  
  .hero-header__logo {
    width: 225px;
  }

  .logo__name {
    font-size: 44px;
    color: #fff;
    text-transform: uppercase;
  }
  
  .logo__name_top {
    padding-bottom: 10px;
    letter-spacing: 63px;
    position: relative;
  }
  
  .logo__name_top::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5px;
    width: 90%;
    height: 1px;
    background-color: #fff;
  }
  
  .logo__name_bottom {
    padding-top: 8px;
    letter-spacing: 58px;
  }

`


const Container = styled.div`
  max-width: 1525px;
    margin: 0 auto;
    padding: 0 15px;
`