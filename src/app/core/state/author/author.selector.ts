import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthorState } from "./author.state";

export const selectAuthors = createFeatureSelector<AuthorState>("authors");
export const selectAuthorsItems = createSelector(
    selectAuthors,
    (state: AuthorState) => state.authors
  );