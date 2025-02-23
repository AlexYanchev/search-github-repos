import styles from './Results.module.css';
import Card from '../Card/Card';
import { useStore } from '../../providers/store/store';
import { observer } from 'mobx-react';
import Spinner from '../Spinner/Spinner';

const Results = observer(() => {
  const store = useStore();
  return (
    <div className={styles.container}>
      {store.state.loading ? (
        <Spinner size='lg' />
      ) : (
        <>
          {store.repos.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))}
        </>
      )}
    </div>
  );
});
export default Results;
