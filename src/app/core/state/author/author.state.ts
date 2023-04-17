import { Author } from 'src/app/core/interfaces';

export interface AuthorState {
  authors: Author[];
  hassError: boolean;
  error: any;
}
export const initState: AuthorState = {
  authors: [],
  hassError: false,
  error: null,
};
