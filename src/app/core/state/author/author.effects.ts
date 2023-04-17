import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import * as AuthorActions from './author.actions';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthorEffects {
  constructor(
    private actions$: Actions<any>,
    private authorService: AuthorService,
    private router: Router
  ) {}

  fetchAuthors$ = createEffect(() =>
    this.actions$.pipe(
      // you can pass in multiple actions here that will trigger the same effect
      ofType(AuthorActions.appLoaded.type, AuthorActions.addAuthorSuccess),
      switchMap(() =>
        this.authorService.getAll().pipe(
          map((authors) =>
            AuthorActions.fetchAuthorSuccess({ authors: authors })
          ),
          catchError((error) =>
            of(AuthorActions.fetchAuthorFailed({ error: error }))
          )
        )
      )
    )
  );
  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.addAuthorFormSubmitted.type),
      switchMap((action) =>
        this.authorService.create(action.creatAuthor).pipe(
          tap(() => this.router.navigate(['/authors'])),
          map((author) => AuthorActions.addAuthorSuccess({ author })),
          catchError((error) =>
            of(AuthorActions.addAuthorFailed({ error: error }))
          )
        )
      )
    )
  );

  editAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.editAuthorItemFormSubmitted.type),
      switchMap((action) =>
        this.authorService.update(action.editAuthor).pipe(
          tap(() => this.router.navigate(['/authors'])),
          map((author) => AuthorActions.editAuthorSuccess({ author })),
          catchError((error) => {
            console.log('error');
            console.log(error);
            return of(AuthorActions.editAuthorFailed({ error: error }));
          })
        )
      )
    )
  );
}
