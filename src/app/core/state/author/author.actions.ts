
import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/core/interfaces";
export const appLoaded = createAction("[App] App Loaded");
export const fetchAuthorSuccess = createAction(
    "[Author API] Fetch Authors Success",
    props<{ authors: Author[] }>()
  );
  
  export const fetchAuthorFailed = createAction(
    "[Author API] Fetch Author Failed",
    props<{ error: any }>()
  );
export const addAuthorFormSubmitted = createAction(
    "[Add Author Page] Add Author  Form Submitted",
    props<{ creatAuthor : Author }>()
  );
  export const addAuthorSuccess = createAction(
    "[Author API] Add Author Success",
    props<{ author:Author }>()
  );
  
 
  export const addAuthorFailed = createAction(
    "[Author API] Add Author Failed",
    props<{ error: any }>()
  );
  export const editAuthorItemFormSubmitted = createAction(
    "[Edit Author Page] Edit Author  Form Submitted",
    props<{ editAuthor: Author }>()
  );
  
  export const editAuthorSuccess = createAction(
    "[Author API] Edit Author Success",
    props<{ author: Author }>()
  );
  
  export const editAuthorFailed = createAction(
    "[Author API] Edit Author Failed",
    props<{ error: any }>()
  );