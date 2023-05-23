import PropTypes from 'prop-types';
import FriendItem from './FriendItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline = true }) => {
  return (
    <li className={FriendItem.item}>
      {isOnline ? (
        <span className={FriendItem.status}>{isOnline}</span>
      ) : (
        <span className={FriendItem.statusfalse}>{isOnline}</span>
      )}
      <img
        className={FriendItem.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={FriendItem.name}>{name}</p>
    </li>
  );
};
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
