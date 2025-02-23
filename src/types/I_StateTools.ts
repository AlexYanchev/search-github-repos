import { I_Error } from './I_Error';

export interface I_StateTools {
  loading: boolean;
  error: I_Error | null;
  withLoading: (asyncFn: (...args: any) => Promise<any>) => Promise<any>;
}
