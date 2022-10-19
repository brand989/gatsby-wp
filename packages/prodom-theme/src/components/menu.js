import React from "react"
import { connect, css, styled, } from "frontity"

const Menu = ({ state }) => {
  return (
    <>
    <MenuBody>
        <ul class="menu__list">
          <li><a href="#cifres" class="menu__link _goto">Объекты в управлении</a></li>
          <li><a href="#services" class="menu__link _goto">Услуги</a></li>
          <li><a href="#news" class="menu__link _goto">Новости</a></li>
          <li><a href="#contacts" class="menu__link _goto">Контакты</a></li>
		    </ul>        
    </MenuBody>

    </>
  )
}

export default connect(Menu)


const MenuBody = styled.nav`
.menu__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  
  .menu__list li:not(:last-child) {
    margin: 0px 32px 0px 0px;
  }
  
  .menu__list li:first-child {
    margin-right: 32px;
  }
  
  .menu__link {
    position: relative;
    font-size: 16px;
    color: #fff;
    -webkit-transition: color 0.3s ease 0s;
    -o-transition: color 0.3s ease 0s;
    transition: color 0.3s ease 0s;
    letter-spacing: 0.4px;
    line-height: 100%;
  }
  
  .menu__link::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
    background-color: #197f53;
    -webkit-transition: width 0.3s ease 0s;
    -o-transition: width 0.3s ease 0s;
    transition: width 0.3s ease 0s;
  }

`