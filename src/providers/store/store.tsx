import React, {
  useContext,
  createContext,
  ReactNode,
  FC,
  useMemo,
} from 'react';
import RepositoriesStore from '../../libs/mobx/stores/RepositoriesStore';
import PagesStore from '../../libs/mobx/stores/PagesStore';

interface Context {
  reposStore: RepositoriesStore;
  pagesStore: PagesStore;
}

const StoreContext = createContext<Context | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = useMemo(() => {
    return {
      reposStore: new RepositoriesStore(),
      pagesStore: new PagesStore(),
    };
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext) as Context;

export default StoreProvider;
