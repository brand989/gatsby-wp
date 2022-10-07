import React, { useState } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"



const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const [contentWindow, setcontentWindow] = useState('');
  const [visible, setVisible] = useState(false);
  const Html2React = libraries.html2react.Component
 
  

  function  openNews (type, id) {
    setcontentWindow(state.source[`${type}`][`${id}`].content.rendered) 
    setVisible(!visible)
  }

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        const media = state.source.post[item.id].featured_media
        const mediaUrl = state.source.attachment[`${media}`]
        let image
        
        if(mediaUrl){
          image = mediaUrl.source_url
        }
        
        
        return (
          <>

            <Link key={item.id} link={post.link}>
              {post.title.rendered}
              <br />
            </Link>
            <button onClick={(e)=>openNews(item.type, item.id )}>подробнее</button>
            {image ? (<img alt={post.title.rendered} src={image}  key={item.id}/>) : (<p>нет картинки</p>) }
         </>
      )})}

     <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>

      {visible ? (<Html2React html={contentWindow} />) : (<></>) }
      
    </Items>
    
  )
}

export default connect(List)


const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`
