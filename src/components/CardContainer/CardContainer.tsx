import "./CardContainer.scss";
import React from "react";
import { getAllGames } from "../../apiCalls";
import { GameCard, GameCardProps } from "../GameCard/GameCard";

type MyProps = {};
type MyState = { games: GameCardProps[]; error?: string };

class CardContainer extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount(): void {
    this.fetchAllGames();
  }

  fetchAllGames = async () => {
    try {
      const items = await getAllGames();
      console.log(items);
      this.setState(items);
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) {
        message = error.message;
      }
      this.setState({ error: message });
    }
  };

  render() {
    const gameCards = this.state.games.map((game) => {
      return <GameCard key={game.id + game.slug} {...game} />;
    });
    return <section className="game-card-container">{gameCards}</section>;
  }
}

export default CardContainer;
