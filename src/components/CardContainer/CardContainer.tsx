import "./CardContainer.scss";
import React from "react";
import { getAllGames } from "../../apiCalls";
import { GameCard, GameCardProps } from "../GameCard/GameCard";

type MyProps = { query: string };
type MyState = { games: GameCardProps[]; error?: string };

class CardContainer extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount(): void {
    this.fetchAllGames();
  }

  fetchAllGames = async () => {
    try {
      const items = await getAllGames();
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
    const filteredBySearch = this.state.games.filter((game) => {
      return game.name.toLowerCase().includes(this.props.query.toLowerCase());
    });
    const gameCards = filteredBySearch.map((game) => {
      return <GameCard key={game.id + game.slug} {...game} />;
    });
    return <section className="game-card-container">{gameCards}</section>;
  }
}

export default CardContainer;
