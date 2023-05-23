import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendItem/FriendItem';

import FriendListModule from './FriendList.module.css';

export const FriendList = ({ friendList }) => {
  return (
    <ul className={FriendListModule.friendList}>
      {friendList.map(({ avatar, name, status, id }) => (
        <FriendListItem
          className={FriendListModule.item}
          key={id}
          name={name}
          avatar={avatar}
          status={status}
        />
      ))}
    </ul>
  );
};

FriendList.protoType = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
