import React from 'react';

import Post from './Post';

import posts from './posts';
import { Container } from './styles';


//todo component de classe precisa extender essa classe
export default class PostsList extends React.Component {
  render() {
    return (
          <Container>
            {posts.map((post) => (
              <Post
                key={post.id}
                title={post.title}
                description={post.description}
              />
            ))}
          </Container>
        );
  }
}

// export default function PostsList() {
//   return (
//     <Container>
//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           title={post.title}
//           description={post.description}
//         />
//       ))}
//     </Container>
//   );
// }