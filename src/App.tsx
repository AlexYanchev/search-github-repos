import React from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ResultsHeader from './components/ResultsHeader/ResultsHeader';
import Results from './components/Results/Results';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <Search />
          <ResultsHeader />
          <Results />
        </main>
      </div>
    </div>
  );
}

export default App;
