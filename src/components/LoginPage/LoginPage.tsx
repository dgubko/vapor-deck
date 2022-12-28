import React from "react";
import { login } from "../../apiCalls";
import "./LoginPage.scss";

type MyProps = { query: string };
type MyState = {
  username: string;
  password: string;
  user?: {};
  error?: string;
};
export class LoginPage extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleUserNameChange = (event: any) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  postUser = async () => {
    try {
      const user = await login(this.state.username, this.state.password);
      this.setState({ user: user });
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  handleFormSubmit = (event: any) => {
    event.preventDefault();
    this.postUser();
  };

  render() {
    return (
      <div>
        <form className="input-panel" onSubmit={this.handleFormSubmit}>
          <h1>Please login</h1>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
