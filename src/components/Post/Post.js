import PropTypes from 'prop-types'
import React from 'react'
import styles from './Post.scss'
import PostHeader from './PostHeader'
import { Rate, Subtitle } from './styles'

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

      <Subtitle>{props.post.subtitle}</Subtitle>

      <Rate>Média: {props.post.likes / 2}</Rate>
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
