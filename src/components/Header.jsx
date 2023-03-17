import { Link } from "react-router-dom";

export const Header = ({ user }) => {
  return (
    <header>
      <Link to="/">
        <h1>NC Games</h1>
      </Link>
      <p id="nav-user">Logged is as {user}</p>
    </header>
  );
};
