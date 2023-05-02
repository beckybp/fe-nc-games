export const UserCard = ({ user }) => {
  return (
    <li className="user-cards">
      <img
        src={user.avatar_url}
        alt={`profile for ${user.username}`}
        className="user-img"
      />
      <h3>{user.username}</h3>
      <h4>{user.name}</h4>
      <button>{`Log in as ${user.username}`}</button>
    </li>
  );
};
