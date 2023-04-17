import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as AuthorReducer from "./author/author.reducer";
export const reducers: ActionReducerMap<State> = {
    authors: AuthorReducer.reducer,
  };
  
  export const metaReducers: MetaReducer<State>[] = [];