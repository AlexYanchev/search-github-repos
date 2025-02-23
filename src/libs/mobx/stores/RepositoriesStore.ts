import { action, observable, makeObservable } from 'mobx';
import { I_Repository } from '../../../types/I_Repository';
import StateStore from './StateStore';

class RepositoriesStore {
  repos: Array<I_Repository> = [];
  state: StateStore = new StateStore();
  private abortController: AbortController | null = null;

  constructor() {
    makeObservable(this, {
      repos: observable,
      setRepos: action,
    });
  }

  setRepos(repos: Array<I_Repository>) {
    this.repos = repos;
  }

  async getRepos(value: string) {
    await this.state.withLoading(async () => {
      if (this.abortController) {
        this.abortController.abort();
      }

      this.abortController = new AbortController();

      const res = await fetch(
        `https://api.github.com/search/repositories?q=${value}&per_page=100`,
        { signal: this.abortController.signal }
      );
      if (!res.ok) {
        console.log(res);
        throw res;
      }
      const data = (await res.json()) as { items: Array<I_Repository> };
      this.setRepos(data.items);
    });
  }
}

export default RepositoriesStore;
