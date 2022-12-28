import React, { useState } from "react";
import "./App.scss";
import { Header } from "../Header/Header";
import { DiscoverGamesPage } from "../DiscoverGamesPage/DiscoverGamesPage";
import { SingleGamesPage } from "../SingleGamePage/SingleGamesPage";
import { Page404 } from "../Page404/Page404";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={DiscoverGamesPage} />
        <Route exact path="/discover/:slug" component={SingleGamesPage} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
