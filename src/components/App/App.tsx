import React, { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { DiscoverGamesPage } from "../DiscoverGamesPage/DiscoverGamesPage";
import { SingleGamesPage } from "../SingleGamePage/SingleGamesPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={DiscoverGamesPage} />
        <Route exact path="/discover/:slug" component={SingleGamesPage} />
      </Switch>
    </div>
  );
}

export default App;
