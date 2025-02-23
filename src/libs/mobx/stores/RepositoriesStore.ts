import { action, observable, computed, makeObservable } from 'mobx';
import { I_Repository } from '../../../types/I_Repository';
import StateStore from './StateStore';
import { I_StateTools } from '../../../types/I_StateTools';

class RepositoriesStore {
  repos: Array<I_Repository> = [];
  // state: I_StateTools = new StateStore().getTools;
  state: StateStore = new StateStore();

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
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${value}`
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
