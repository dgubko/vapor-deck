import CardContainer from "../CardContainer/CardContainer";
import { Typography } from "@mui/material";
import Search from "../SearchBar/SearchBar";
import React, { useState } from "react";

export const DiscoverGamesPage = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-line">
        <Typography variant="h3" gutterBottom>
          Discover Games
        </Typography>
        <Search setQuery={setQuery} />
      </div>
      <CardContainer query={query} />
    </main>
  );
};
