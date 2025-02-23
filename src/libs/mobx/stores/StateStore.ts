import { action, observable, computed, makeObservable } from 'mobx';
import { I_Error } from '../../../types/I_Error';
import { I_StateTools } from '../../../types/I_StateTools';

const isErrorPredicate = (error: unknown): error is I_Error => {
  if (
    typeof error === 'object' &&
    error !== null &&
    Object.hasOwn(error, 'reason')
  ) {
    return true;
  }

  return false;
};

class StateStore {
  loading: boolean = false;
  error: I_Error | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      clearError: action,
      setLoading: action,
      setError: action,
      getTools: computed,
    });
  }

  clearError() {
    this.error = null;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setError(reason: string) {
    this.error = { reason };
  }

  async withLoading(asyncFn: (...args: any) => Promise<any>) {
    this.setLoading(true);
    this.clearError();
    try {
      await asyncFn();
    } catch (error) {
      if (isErrorPredicate(error)) {
        return this.setError(error.reason);
      }

      return this.setError('Неизвестная ошибка');
    } finally {
      this.setLoading(false);
    }
  }

  get getTools(): I_StateTools {
    return {
      loading: this.loading,
      error: this.error,
      withLoading: this.withLoading,
    };
  }
}

export default StateStore;
