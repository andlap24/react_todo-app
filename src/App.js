import React, { useEffect, useState } from 'react';
import './App.css';

import { getUsers, getInfo } from './api/api';

import { Loader } from './components/Loader';
import { UsersList } from './components/UsersList';
import { UserInfo } from './components/UserInfo';
import { Context } from './context';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [displayUserInfo, setDisplayUserInfo] = useState([false]);
  const [selectUser, setSelectUser] = useState([]);

  useEffect(async() => {
    const starWarsUsers = await getUsers('/people');

    setUsers(starWarsUsers);
  }, []);

  const getUserInfo = async(url) => {
    const starWarsUserInfo = await getInfo(url);

    setUserInfo(starWarsUserInfo);
    togglerUserInfo();
  };

  const togglerUserInfo = () => {
    setDisplayUserInfo(!displayUserInfo);
  };

  const changeSelectUser = (userName) => {
    setSelectUser(userName);
  };

  return (
    <Context.Provider value={users}>
      <div className="App">
        <div className="App__body">
          <h1 className="App__title">
            to
            <span>do</span>
          </h1>
          <UsersList
            users={users}
            displayUserInfo={displayUserInfo}
            selectUser={selectUser}
            getUserInfo={getUserInfo}
            changeSelectUser={changeSelectUser}
          />
          {displayUserInfo
            ? <Loader />
            : (
              <UserInfo
                userInfo={userInfo}
                displayUserInfo={displayUserInfo}
              />
            )
          }
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
