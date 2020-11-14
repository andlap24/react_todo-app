import React from 'react';
import PropTypes from 'prop-types';
import './UsersList.css';

// eslint-disable-next-line
export const UsersList = ({ users, getUserInfo, displayUserInfo, changeSelectUser, selectUser }) => (
  <>
    <ul className="App__todo-list list">
      {users.map(user => (
        <div className="list__item item">
          <li
            key={user.created}
          >
            {user.name}
          </li>
          <button
            type="button"
            className="item__btn"
            onClick={() => {
              getUserInfo(user.url);
              changeSelectUser(user.name);
            }}
          >
            {selectUser !== user.name
              ? 'about'
              : 'close'
            }
          </button>
        </div>
      ))}
    </ul>
  </>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  getUserInfo: PropTypes.func.isRequired,
  displayUserInfo: PropTypes.bool.isRequired,
  changeSelectUser: PropTypes.func.isRequired,
};
