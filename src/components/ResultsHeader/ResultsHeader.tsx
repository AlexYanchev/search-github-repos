import { FC, useState } from 'react';
import styles from './ResultsHeader.module.css';
import { E_Sort } from '../../types/E_Sort';
import { useStore } from '../../providers/store/store';
import { E_Pages } from '../../types/E_Pages';

interface ResultsHeaderProps {
  title: string;
}

const ResultsHeader: FC<ResultsHeaderProps> = ({ title }) => {
  const { reposStore, pagesStore } = useStore();
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [sort, setSort] = useState<E_Sort | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.currentTarget.value) {
      return;
    }
    const sortValue = e.currentTarget.value as E_Sort;
    setSort(sortValue);
    switch (pagesStore.currentPage) {
      case E_Pages.MAIN: {
        return reposStore.sortMainRepos(sortValue);
      }
      case E_Pages.FAVORITES: {
        return reposStore.sortFavoriteRepos(sortValue);
      }
      default:
        return;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.selectContainer} data-isopen={openSelect}>
        <select
          value={sort || ''}
          className={styles.select}
          onChange={onChange}
          onClick={(e) => {
            e.currentTarget.onblur = () => setOpenSelect(false);
            setOpenSelect(!openSelect);
          }}
        >
          <option
            value=''
            disabled
            style={{ color: `rgba(var(--base-color-light-dark), 0.5)` }}
          >
            Сортировка
          </option>
          <option value={E_Sort.CREATED_DESC}>Сначала новые</option>
          <option value={E_Sort.CREATED_ASC}>Сначала старые</option>
          <option value={E_Sort.STARS_DESC}>Сначала много звезд</option>
          <option value={E_Sort.STARS_ASC}>Сначала мало звезд</option>
          <option value={E_Sort.ALPHA_ASC}>А-B</option>
          <option value={E_Sort.ALPHA_DESC}>B-A</option>
        </select>
      </div>
    </div>
  );
};
export default ResultsHeader;
