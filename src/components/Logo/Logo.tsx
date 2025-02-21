import styles from './Logo.module.css';
import LogoIcon from '../../asserts/icons/LogoIcon/LogoIcon';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <p className={styles.name}>GitHubSearch</p>
    </div>
  );
};
export default Logo;
