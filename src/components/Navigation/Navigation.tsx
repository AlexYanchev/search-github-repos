import styles from './Navigation.module.css';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import AnonIcon from '../../asserts/icons/AnonIcon/AnonIcon';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.items}>
        <a href='/' title='Избранное'>
          <HeartIcon />
        </a>
        <a href='/' title='Профиль'>
          <div className={styles.profileBackground}>
            <AnonIcon />
          </div>
        </a>
      </ul>
    </nav>
  );
};
export default Navigation;
