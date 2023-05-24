import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FileFriendItem/FriendItem';

import FriendListModule from './FriendList.module.css';

export const FriendList = ({ friendList }) => {
  return (
    <ul className={FriendListModule.friendList}>
      {friendList.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          className={FriendListModule.item}
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.protoType = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
