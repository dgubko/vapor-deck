import { Link } from "react-router-dom";
import "./Page404.scss";

export const Page404 = () => {
  return (
    <div className="display-container">
      <h1>404 Page not found</h1>
      <Link to="/">Go back to main page</Link>
    </div>
  );
};
