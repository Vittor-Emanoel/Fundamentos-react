import PropTypes from 'prop-types'
import React from 'react'
import styles from './Post.scss'
import PostHeader from './PostHeader'

//props => propriedades
function Post(props) {
  //Renderização condicional 3 formas: IF, TERNÁRIO & SHORT
  return (
    <article className={props.post.removed ? styles.postDeleted : styles.post}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      Likes: {props.post.likes / 2}
    </article>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Post
