import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transaction.json';

import { Profile } from './FileProfile/Profile';
import { Statistics } from './FileStatistics/Statistics';
import { FriendList } from './FileFriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'contents',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendList={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
