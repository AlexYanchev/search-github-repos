import React, {
  useContext,
  createContext,
  ReactNode,
  FC,
  useMemo,
} from 'react';
import RepositoriesStore from '../../libs/mobx/stores/RepositoriesStore';

const StoreContext = createContext<RepositoriesStore | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = useMemo(() => {
    return new RepositoriesStore();
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext) as RepositoriesStore;

export default StoreProvider;
