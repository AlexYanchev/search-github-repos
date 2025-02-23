import { observable, action, makeObservable } from 'mobx';
import { E_Pages } from '../../../types/E_Pages';

class PagesStore {
  page: E_Pages = E_Pages.MAIN;
  repoId: number | null = null;

  constructor() {
    makeObservable(this, {
      page: observable,
      setPage: action,
    });
  }

  setPage(page: E_Pages, repoId?: number) {
    this.page = page;
    if (repoId) {
      this.repoId = repoId;
    }
  }
}

export default PagesStore;
