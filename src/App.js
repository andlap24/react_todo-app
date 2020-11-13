import React, { useEffect, useState } from 'react';
import './App.css';

import { getUsers, getInfo } from './api/api';

import { UsersList } from './components/UsersList';
import { UserInfo } from './components/UserInfo';
import { Context } from './context';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserUnfo] = useState([]);

  useEffect(async() => {
    const starWarsUsers = await getUsers('/people');

    setUsers(starWarsUsers);
  }, []);

  const getUserInfo = async(id) => {
    const starWarsUserInfo = await getInfo(id);

    setUserUnfo(starWarsUserInfo);
  };

  return (
    <Context.Provider value={users}>
      <div className="App">
        <div className="App__body">
          <h1 className="App__title">
            Star
            <span>Wars</span>
          </h1>
          <UsersList
            users={users}
            getUserInfo={getUserInfo}
          />
          <UserInfo userInfo={userInfo} />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
