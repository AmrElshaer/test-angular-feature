import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appLoaded, selectAuthorsItems } from 'src/app/core/state/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  authorsList$ = this.store.select(selectAuthorsItems);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(appLoaded());
  }
}
