import React from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Search />
      </main>
    </div>
  );
}

export default App;
