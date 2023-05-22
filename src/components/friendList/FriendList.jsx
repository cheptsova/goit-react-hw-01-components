import PropTypes from 'prop-types';

import FriendListModule from './FriendList.module.css';

export const FriendList = ({ friendList }) => {
  return (
    <sectionWrapper>
      <friends className={FriendListModule.friendList}>
        {friendList.map(
          ({
            id,
            avatar = 'https://www.bangkokfightlab.com/wp-content/uploads/2017/05/noavatar.png',
            name = 'Unknown',
            isOnline,
          }) => {
            return (
              <friendItem
                key={id}
                className={FriendListModule.item}
                isOnline={isOnline}
              >
                <span
                  className={
                    isOnline
                      ? FriendListModule.statusOnline
                      : FriendListModule.statusOffline
                  }
                >
                  {isOnline}
                </span>
                <img
                  className={FriendListModule.avatar}
                  alt="User avatar"
                  width="48"
                  src={avatar}
                />
                <p className={FriendListModule.name}>{name}</p>
              </friendItem>
            );
          }
        )}
      </friends>
    </sectionWrapper>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
