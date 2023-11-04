import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList} from './FriendList/FriendList';
import friends from '../data/friends.json';

export const App = () => {
  return ( <>
    <Profile user={user}/>
    <Statistics title="UPLOAD STATS" stats={data} />
    <FriendList friends={friends}/>
    </>
    
  );
};
