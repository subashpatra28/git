import React from 'react'
import UserPage from "../../containers";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from '../Dashboard';

function SearchRepos(props) {
  
  const username = prompt("Enter Github Username");
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default SearchRepos