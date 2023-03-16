import PropTypes from 'prop-types'
import React from 'react'
import PostHeader from './PostHeader'
import { Container, Rate, Subtitle } from './styles'

//props => propriedades
function Post(props) {
  //Renderização condicional 3 formas: IF, TERNÁRIO & SHORT
  return (
    <Container removed={props.post.removed}>
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
    </Container>
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
