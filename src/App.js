import React from 'react'
import Header from './Header'
import Post from './Post'



export function App() {
  return(
    <>
  
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      
    <Post 
    post={{
      title:'titulo da noticia 01', 
      subtitle: 'subtitulo da noticia 01'
    }}
   />

    <Post 
        post={{
          title:'titulo da noticia 02', 
          subtitle: 'subtitulo da noticia 02'
        }}
      />

    <Post 
        post={{
          title:'titulo da noticia 03', 
          subtitle: 'subtitulo da noticia 03'
        }}
      />
    </>
  )
}