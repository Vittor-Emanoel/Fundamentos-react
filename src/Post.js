import React from "react";


//props => propriedades
function Post(props) {
  return (  
    <>
    <article>
      <strong>{props.post.title}</strong>
      <br />
      <small>{props.post.subtitle}</small>
    </article>
    <br />
    </>
  );
}

export default Post;