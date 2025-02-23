import styles from './Navigation.module.css';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import AnonIcon from '../../asserts/icons/AnonIcon/AnonIcon';
import Notification from '../Notification/Notification';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a href='/' title='Избранное'>
            <div className={styles.icon}>
              <HeartIcon width='16' height='13' />
            </div>
          </a>
          <Notification value={4} />
        </li>
        <li>
          <a href='/' title='Профиль'>
            <div className={styles.profileBackground}>
              <AnonIcon />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
