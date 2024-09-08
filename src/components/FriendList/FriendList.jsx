import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import styles from './friendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friends}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
