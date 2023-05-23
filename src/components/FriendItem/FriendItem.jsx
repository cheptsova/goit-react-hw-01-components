import PropTypes from 'prop-types';
import FriendItem from './FriendItem.module.css';

export const FriendListItem = ({ id, avatar, name, status }) => {
  return (
    <li className={FriendItem.item}>
      {status.isOnline ? (
        <span className={FriendItem.status}>{status.isOnline}</span>
      ) : (
        <span className={FriendItem.statusfalse}>{status.isOnline}</span>
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
  status: PropTypes.bool.isRequired,
};
