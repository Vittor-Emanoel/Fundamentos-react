import React from 'react'
import Header from './Header'
import Post from './Post'



export function App() {
  return(
    <>
  
      <Header>
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      
    <Post 
    likes={20}
    post={{
      title:'titulo da noticia 01', 
      subtitle: 'subtitulo da noticia 01'
    }}
   />

    <Post 
    likes={15}
        post={{
          title:'titulo da noticia 02', 
          subtitle: 'subtitulo da noticia 02'
        }}
      />

    <Post 
      likes={11}
        post={{
          title:'titulo da noticia 03', 
          subtitle: 'subtitulo da noticia 03'
        }}
      />
    </>
  )
}