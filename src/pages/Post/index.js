import React from 'react';


export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const {search} = this.props.location

    this.queryParams = new URLSearchParams(search)
  }

  render() {
    console.log(this.queryParams.get('meuQueryParams'))

    return  <h1>Post page</h1>
  }
}


// function Post() {
//   const params = useParams()
//   const {search} = useLocation()
//   const queryParams = useMemo(() => new URLSearchParams(search), [search])

//   console.log(queryParams)

//   return ( 
    
//     <>
//     <h1>Post page</h1>
//     {console.log(params)}
//     </>
//    );
// }

// export default Post;

