import { FC, useEffect, useRef, useState } from 'react';
import styles from './Search.module.css';
import { useStore } from '../../providers/store/store';

interface SearchProps {
  delay?: number;
}

const Search: FC<SearchProps> = ({ delay = 1000 }) => {
  const store = useStore();
  const [searchValue, setSearchValue] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (!Boolean(searchValue)) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      store.getRepos(searchValue);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  return (
    <form className={styles.form}>
      <input
        onChange={onChange}
        className={styles.input}
        type='text'
        title='Поиск'
        placeholder='Search'
        value={searchValue}
      />
    </form>
  );
};
export default Search;
