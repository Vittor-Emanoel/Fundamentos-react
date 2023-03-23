import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function Post() {
  const params = useParams()
  const {search} = useLocation()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])

  console.log(queryParams)

  return ( 
    
    <>
    <h1>Post page</h1>
    {console.log(params)}
    </>
   );
}

export default Post;