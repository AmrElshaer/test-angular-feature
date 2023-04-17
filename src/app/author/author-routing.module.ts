import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const routes: Routes = [
  { path: '', component: AuthorListComponent },
  {
    path: 'create',
    component: AuthorCreateComponent,
  },
  {
    path: 'edit/:id',
    component: AuthorEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class AuthorRoutingModule {}
