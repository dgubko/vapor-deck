import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Typography variant="h3" gutterBottom>
          Discover Games
        </Typography>
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
