import { action, observable, makeObservable, computed } from 'mobx';
import { I_Repository } from '../../../types/I_Repository';
import StateStore from './StateStore';

class RepositoriesStore {
  repos: Array<I_Repository> = [];
  activeRepo: I_Repository | null = null;
  favoriteRepos: Record<number, I_Repository> = {};
  favoriteReposIds: Array<number> = [];
  state: StateStore = new StateStore();
  private abortController: AbortController | null = null;

  constructor() {
    makeObservable(this, {
      repos: observable,
      activeRepo: observable,
      favoriteRepos: observable,
      favoriteReposIds: observable,
      setRepos: action,
      toggleFavoriteRepos: action,
      setActiveRepo: action,
      getFavoriteCount: computed,
    });
  }

  get getFavoriteCount() {
    return this.favoriteReposIds.length;
  }

  setActiveRepo(repo: I_Repository) {
    this.activeRepo = repo;
  }

  setRepos(repos: Array<I_Repository>) {
    this.repos = repos;
  }

  toggleFavoriteRepos(repo: I_Repository) {
    if (this.favoriteRepos[repo.id]) {
      this.favoriteReposIds = this.favoriteReposIds.filter(
        (id) => id !== repo.id
      );

      delete this.favoriteRepos[repo.id];
    } else {
      this.favoriteRepos[repo.id] = repo;
      this.favoriteReposIds.push(repo.id);
    }
  }

  private async customFetch(value: string, options?: RequestInit) {
    return fetch(
      `https://api.github.com/search/repositories?q=${value}&per_page=100&type=Repositories`,

      options
    ).then((res) => {
      if (!res.ok) {
        console.log(res);
        throw res;
      }
      return res.json();
    });
  }

  async getRepos(value: string) {
    await this.state.withLoading(async () => {
      if (this.abortController) {
        this.abortController.abort();
      }
      this.abortController = new AbortController();

      const res = await this.customFetch(value, {
        signal: this.abortController.signal,
      });

      const data = res as { items: Array<I_Repository> };
      this.setRepos(data.items);
    });
  }
}

export default RepositoriesStore;
