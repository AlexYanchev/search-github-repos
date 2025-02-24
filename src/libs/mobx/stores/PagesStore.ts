import { observable, action, makeObservable, computed } from 'mobx';
import { E_Pages } from '../../../types/E_Pages';

class PagesStore {
  breadcrumbs: E_Pages[] = [E_Pages.MAIN];

  constructor() {
    makeObservable(this, {
      breadcrumbs: observable,
      addPage: action,
      goPrevPage: action,
      setInitial: action,
      currentPage: computed,
      prevPage: computed,
    });
  }

  get currentPage() {
    return this.breadcrumbs.at(-1) || this.breadcrumbs[0];
  }

  get prevPage() {
    return this.breadcrumbs.at(-2) || this.breadcrumbs[0];
  }

  setInitial() {
    this.breadcrumbs = [E_Pages.MAIN];
  }

  addPage(page: E_Pages) {
    this.breadcrumbs.push(page);
  }

  goPrevPage() {
    if (this.breadcrumbs.length > 1) {
      this.breadcrumbs.pop();
    }
  }
}

export default PagesStore;
