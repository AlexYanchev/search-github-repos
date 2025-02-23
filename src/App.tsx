import React, { FC } from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ResultsHeader from './components/ResultsHeader/ResultsHeader';
import Results from './components/Results/Results';
import Profile from './components/Profile/Profile';
import { observer } from 'mobx-react';

const App: FC = observer(() => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <Search />
          <ResultsHeader />
          <Results />
          {/* <Profile /> */}
        </main>
      </div>
    </div>
  );
});

export default App;
