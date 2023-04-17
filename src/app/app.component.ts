import { Component } from '@angular/core';
import { selectAuthorsItems } from './core/state/author';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  authorsList$ = this.store.select(selectAuthorsItems);
  numberOfAuthors: number = 0;
  constructor(private store: Store) {
    this.authorsList$.subscribe(
      (authors) => (this.numberOfAuthors = authors.length)
    );
  }
}
