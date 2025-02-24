import styles from './Results.module.css';
import Card from '../Card/Card';
import { useStore } from '../../providers/store/store';
import { observer } from 'mobx-react';
import Spinner from '../Spinner/Spinner';
import React, { FC } from 'react';
import { I_Repository } from '../../types/I_Repository';

interface ResultsProps {
  list: Array<I_Repository>;
}

const Results: FC<ResultsProps> = observer(({ list }) => {
  const { reposStore: store } = useStore();

  return (
    <div className={styles.container}>
      {store.state.loading ? (
        <Spinner size='lg' />
      ) : (
        <ul className={styles.items}>
          {list.map((repo) => (
            <li key={repo.id} className={styles.itemContainer}>
              <Card repo={repo} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
export default React.memo(Results);
