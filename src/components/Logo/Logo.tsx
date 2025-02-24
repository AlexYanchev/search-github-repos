import styles from './Logo.module.css';
import LogoIcon from '../../asserts/icons/LogoIcon/LogoIcon';
import { useStore } from '../../providers/store/store';

const Logo = () => {
  const { pagesStore } = useStore();
  return (
    <div className={styles.logo} onClick={() => pagesStore.setInitial()}>
      <LogoIcon />
      <p className={styles.name}>GitHubSearch</p>
    </div>
  );
};
export default Logo;
