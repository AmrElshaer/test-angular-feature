import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { addAuthorFormSubmitted } from 'src/app/core/state/author';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author, IAuthor } from 'src/app/core/interfaces';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent {
  authorForm: FormGroup;
 constructor(private store:Store,private fb: FormBuilder){
  this.authorForm = this.fb.group({
    name: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
    phone: ['', Validators.required]
  });

 }
 


 onSubmit(): void {
  const author: Author = {
    id:null,
    name: this.authorForm.value.name,
    street: this.authorForm.value.street,
    city: this.authorForm.value.city,
    postcode: this.authorForm.value.postcode,
    country: this.authorForm.value.country,
    phone: this.authorForm.value.phone
  };
  this.store.dispatch(
    addAuthorFormSubmitted({
      creatAuthor:author
    })
  );
}
}
