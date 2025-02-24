import React, { FC } from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ResultsHeader from './components/ResultsHeader/ResultsHeader';
import Results from './components/Results/Results';
import Profile from './components/Profile/Profile';
import { observer } from 'mobx-react';
import { useStore } from './providers/store/store';
import { E_Pages } from './types/E_Pages';
import BackButton from './components/BackButton/BackButton';

const App: FC = observer(() => {
  const { reposStore, pagesStore } = useStore();

  const getScreen = () => {
    switch (pagesStore.currentPage) {
      case E_Pages.PROFILE: {
        return <Profile />;
      }
      case E_Pages.FAVORITES: {
        return (
          <>
            <ResultsHeader
              title={`Favorites: ${reposStore.getFavoriteCount}`}
            />
            <Results
              list={reposStore.favoriteReposIds.map(
                (repo) => reposStore.favoriteRepos[repo]
              )}
            />
          </>
        );
      }
      default: {
        return (
          <>
            <Search />
            <ResultsHeader
              title={`Result: ${reposStore.repos.length} repositories`}
            />
            <Results list={reposStore.repos} />
          </>
        );
      }
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      {pagesStore.currentPage !== E_Pages.MAIN && <BackButton />}
      <div className={styles.mainContainer}>
        <main className={styles.main}>{getScreen()}</main>
      </div>
    </div>
  );
});

export default App;
