import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';


// React trabalha com imutabilidade

export function App() {
const [posts, setPosts] = useState([
  {id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20},
  {id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10},
  {id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50}
])
console.log({posts});

function handleRefresh() {
    setPosts([...posts,
      {
        id: Math.random(), 
        title: `Title#0${posts.length + 1}`, 
        subtitle: `Sub#0${posts.length + 1}`, 
        likes: 50
      }])
}

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

        {posts.map((post) => (
          <Post 
            key={post.id}
            likes={post.likes}
            post={{
              title: post.title,
              subtitle: post.subtitle,
            }}
          />
        ))}
    </>
  )
}