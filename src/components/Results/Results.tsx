import styles from './Results.module.css';
import Card from '../Card/Card';
import { useStore } from '../../providers/store/store';
import { observer } from 'mobx-react';
import Spinner from '../Spinner/Spinner';
import { FC, useEffect } from 'react';
import { E_Pages } from '../../types/E_Pages';
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
        <>
          {list.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))}
        </>
      )}
    </div>
  );
});
export default Results;
