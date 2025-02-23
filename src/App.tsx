import React, { FC, useEffect } from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ResultsHeader from './components/ResultsHeader/ResultsHeader';
import Results from './components/Results/Results';
import Profile from './components/Profile/Profile';
import { useStore } from './providers/store/store';
import { observer } from 'mobx-react';
import Spinner from './components/Spinner/Spinner';

const App: FC = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.getRepos('Alex');
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          {/* <Search />
          <ResultsHeader />
          <Results />
          <Profile /> */}
          <Spinner />
        </main>
      </div>
    </div>
  );
});

export default App;
