import React from "react";
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";


export default function Routes() {
  return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={Posts} />
        <Route path='*' component={NotFound} />  
      </Switch>
  )
}