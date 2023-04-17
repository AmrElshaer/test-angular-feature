import { Action, createReducer, on } from '@ngrx/store';
import { AuthorState, initState } from './author.state';
import * as AuthorActions from './author.actions';
import { state } from '@angular/animations';
const authorReducer = createReducer(
  initState,
  on(AuthorActions.fetchAuthorSuccess, (state, { authors }) => ({
    ...state,
    authors: authors,
  })),
  on(AuthorActions.editAuthorSuccess, (state, { author }) => {
    const menuItemIndex = state.authors.findIndex(
      (item) => item.id === author.id
    );
    const updatedMenuItems = [...state.authors];
    updatedMenuItems[menuItemIndex] = author;
    return {
      ...state,
      authors: updatedMenuItems,
    };
  }),
  on(AuthorActions.addAuthorSuccess, (state, { author }) => ({
    ...state,
    authors: [...state.authors, author],
  })),
  on(AuthorActions.editAuthorFailed, (state, { error }) => ({
    ...state,
    hassError: true,
    error,
  })),
  on(AuthorActions.addAuthorFailed, (state, { error }) => ({
    ...state,
    hassError: true,
    error,
  }))
);

export function reducer(state: AuthorState | undefined, action: Action) {
  return authorReducer(state, action);
}
