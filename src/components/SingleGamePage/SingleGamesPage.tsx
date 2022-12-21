import React from "react";
import { getSingleGame } from "../../apiCalls/games";

type ComponentPropsType = any;
type ComponentStateType = {
  singleGame: { name: string; rating: number; screenshots: any } | null;
  isLoaded?: boolean;
  error?: string;
};

export class SingleGamesPage extends React.Component<
  ComponentPropsType,
  ComponentStateType
> {
  constructor(props: any) {
    super(props);
    this.state = { singleGame: null };
  }

  componentDidMount(): void {
    this.fetchSingleGame();
  }

  fetchSingleGame = async () => {
    try {
      const item = await getSingleGame(this.props.match.params.slug);
      this.setState({
        singleGame: item.game,
        isLoaded: true,
      });
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : "Unknown Error",
      });
    }
  };

  render() {
    return (
      this.state.singleGame && (
        <div>
          <h1>{this.state.singleGame.name}</h1>
          <p>Rating: {this.state.singleGame.rating?.toFixed(1)}</p>
          {this.state.singleGame.screenshots.map((screenshot: any) => {
            return <img src={screenshot.url} />;
          })}
        </div>
      )
    );
  }
}
