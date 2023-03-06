import React from 'react'
import Post from './Post'



export function App() {
  return(
    <>
    <h1>JStack's Blog</h1>
    <h2>Posts da semana</h2>
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