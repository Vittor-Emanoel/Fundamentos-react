import PropTypes from 'prop-types';
import React from "react";

//props => propriedades
function Post(props) {
  //Renderização condicional 3 formas: IF, TERNÁRIO & SHORT
  return (  
    <>
    <article>
      <strong>
        {props.post.read && <s>{props.post.title}</s>}
      </strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
      <br />
      <small>{props.post.subtitle}</small>
      <br /> 
      Likes: {props.post.likes / 2}
    </article>
    <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired 
}

export default Post;