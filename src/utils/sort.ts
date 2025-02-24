import { E_Sort } from '../types/E_Sort';
import { I_Repository } from '../types/I_Repository';

export const sortRepos = (repos: Array<I_Repository>, sort: E_Sort) => {
  switch (sort) {
    case E_Sort.CREATED_ASC: {
      return [...repos].sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    }
    case E_Sort.CREATED_DESC: {
      return [...repos].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
    case E_Sort.STARS_ASC: {
      return [...repos].sort((a, b) => a.stargazers_count - b.stargazers_count);
    }
    case E_Sort.STARS_DESC: {
      return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    case E_Sort.ALPHA_ASC: {
      return [...repos].sort((a, b) => a.name.localeCompare(b.name));
    }
    case E_Sort.ALPHA_DESC: {
      return [...repos].sort((a, b) => b.name.localeCompare(a.name));
    }
    default: {
      return repos;
    }
  }
};
