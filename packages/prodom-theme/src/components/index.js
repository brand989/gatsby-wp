import React from "react"
import { connect, Global, css, styled, Head  } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import Header from "./header"

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
    <Head>
        <title>Prodom</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
    </Head>
    <Global
        styles={css`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
    <Header>
        <Menu>

        </Menu>
      </Header>
      <Main>
              {data.isArchive && 
                <MenuLink>
                {data.items.map((item) => {
                  const link = '#' + item.id
                  console.log(link)
                  return (<a key={item.id} href={link}>
                    {item.id}
                    </a>
                  )})}
                </MenuLink>
              }
              
        
            <Switch>
              
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPost} />
              <Page when={data.isPage} />
              <Page when={data.isDestinations}/>
              <Error when={data.isError} />
            </Switch>
      </Main>
    </>
  )
}

export default connect(Root)




const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  `
  const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

const MenuLink= styled.div`
background-color: #e5edee;
`