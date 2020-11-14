import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.css';

export const UserInfo = ({ userInfo }) => (
  <div className="App__user user">
    <ul className="user__info info">
      <li className="">
        {`Height: ${userInfo.height}`}
      </li>
      <li>
        {`Mass: ${userInfo.mass}`}
      </li>
      <li>
        {`Hair color: ${userInfo.hair_color}`}
      </li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
  }).isRequired,
};
