import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import ContributorChanges from "./components/ContributorChanges";
import Dashboard from "./components/Dashboard";
import SearchRepos from "./components/SearchRepos";
import TotalChanges from "./components/TotalChanges";

function App() {
  return (
    <>
    {/* <SearchRepos /> */}
    <Dashboard/>
    <TotalChanges />
    <ContributorChanges/>
    </>
  );
}

export default App;
