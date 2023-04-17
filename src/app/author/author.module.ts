import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorEditComponent,
    AuthorCreateComponent,
  ],
  imports: [
    RouterModule,
    AuthorRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class AuthorModule {}
