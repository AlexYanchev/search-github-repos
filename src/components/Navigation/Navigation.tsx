import styles from './Navigation.module.css';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import AnonIcon from '../../asserts/icons/AnonIcon/AnonIcon';
import Notification from '../Notification/Notification';
import { observer } from 'mobx-react';
import { useStore } from '../../providers/store/store';
import { E_Pages } from '../../types/E_Pages';

const Navigation = observer(() => {
  const { reposStore: store, pagesStore } = useStore();

  const linkTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    pagesStore.setPage(E_Pages.FAVORITES);
  };
  return (
    <nav>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a href='/' title='Избранное' onClick={linkTo}>
            <div className={styles.icon}>
              <HeartIcon width='16' height='13' />
            </div>
          </a>
          {store.getFavoriteCount > 0 && (
            <Notification value={store.getFavoriteCount} />
          )}
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
});
export default Navigation;
