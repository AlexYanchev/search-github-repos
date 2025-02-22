import React, { useEffect } from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ResultsHeader from './components/ResultsHeader/ResultsHeader';
import Results from './components/Results/Results';
import Profile from './components/Profile/Profile';

function App() {
  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=Alex')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          {/* <Search />
          <ResultsHeader />
          <Results /> */}
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;
