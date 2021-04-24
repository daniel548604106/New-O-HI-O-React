import React, { useEffect, useState } from 'react';
import { apiGetUsers } from '../api/index';
import Board from '../components/Users/Board.jsx';
const Users = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await apiGetUsers();
        console.log(users);
        setUsers(users.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div>
      {users &&
        users.map((user) => (
          <div className="flex item-center overflow-auto no-wrap" key={user.email}>
            <p className="mr-5">{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      <Board />
    </div>
  );
};

export default Users;
