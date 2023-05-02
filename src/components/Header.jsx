import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC Games</h1>
      </Link>
      <Link to="/users">
        <button>Log in</button>
      </Link>
    </header>
  );
};
