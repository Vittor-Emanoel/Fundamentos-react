import React from "react";

function Header({title, children}) {
  return ( 
      <>
          <h1>{title}</h1>
          {children}
      </>
   );
}

export default Header;