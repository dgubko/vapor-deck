import React from "react";
import { Redirect } from "react-router-dom";
import { getSingleGame } from "../../apiCalls/games";
import "./SingleGamesPage.scss";

type ComponentPropsType = any;
type ComponentStateType = {
  singleGame: {
    name: string;
    rating: number;
    screenshots: any;
    summary: string;
    genres: any;
  } | null;
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
    if (this.state.error) {
      return <Redirect to="/Page404" />;
    }
    return (
      this.state.singleGame && (
        <div>
          <h1 className="game-name">{this.state.singleGame.name}</h1>
          <p>
            Genres:
            {this.state.singleGame.genres.map((genre: { name: string }) => {
              return <button>{genre.name}</button>;
            })}
          </p>
          <p>Rating: {this.state.singleGame.rating?.toFixed(0)}/100</p>
          <p>{this.state.singleGame.summary}</p>
          <div className="game-images">
            {this.state.singleGame.screenshots.map(
              (screenshot: { url: string }) => {
                return (
                  <img src={screenshot.url.replace("t_thumb", "t_720p")} />
                );
              }
            )}
          </div>
        </div>
      )
    );
  }
}
