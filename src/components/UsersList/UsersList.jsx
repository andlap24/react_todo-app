import React from 'react';
import PropTypes from 'prop-types';
import './UsersList.css';

export const UsersList = ({ users }) => (
  <>
    <ul className="App__todo-list list">
      {users.map(user => (
        <li
          key={user.name}
          className="list__item item"
        >
          {user.name}
        </li>
      ))}
    </ul>

    <div>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
  </>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
