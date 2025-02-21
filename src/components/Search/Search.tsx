import styles from './Search.module.css';

const Search = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        title='Поиск'
        placeholder='Search'
      />
    </form>
  );
};
export default Search;
