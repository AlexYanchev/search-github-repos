import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>
    </header>
  );
};
export default Header;
