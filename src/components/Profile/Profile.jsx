import styles from './profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <img className={styles.image} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{`@${tag}`}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(([name, value]) => {
          return (
            <li key={name} className={styles.stat}>
              <span className={styles.statName}>{name}</span>
              <span className={styles.statValue}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
