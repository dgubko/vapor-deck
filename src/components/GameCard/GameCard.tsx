import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export type GameCardProps = {
  id: number;
  name: string;
  slug: string;
  cover: { url: string };
};

export const GameCard = (props: GameCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.cover.url}
          alt={props.name + " cover"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/discover/${props.slug}`}>Explore</Link>
      </CardActions>
    </Card>
  );
};
