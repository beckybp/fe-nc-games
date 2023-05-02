import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => {
            return <UserCard key={user.username} user={user} />;
          })}
        </ul>
      )}
    </section>
  );
};
