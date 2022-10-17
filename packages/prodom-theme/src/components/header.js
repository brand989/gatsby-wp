import React from "react"
import { connect, css, styled, } from "frontity"
import bgImage from "../../uploud/welcome-bg.jpg"

const Header = ({ state }) => {
  return (
    <>
         <HeaderBlock>
            <div className="headerPoints">Управляющая компания</div>
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

.headerPoints {
    color: green;
    font-size: 25px;
}

`

