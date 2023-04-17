import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { Author, IAuthor } from 'src/app/core/interfaces';
import { AuthorService } from 'src/app/core/services/author.service';
import { editAuthorItemFormSubmitted } from 'src/app/core/state/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css'],
})
export class AuthorEditComponent implements OnInit {
  public inputControls = {
    name: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
    phone: ['', Validators.required],
  };
  authorForm: FormGroup;
  authorId$ = this.activatedRoute.params.pipe(map((params) => params['id']));
  author$ = this.authorId$.pipe(
    tap((id) => (this._id = id)),
    switchMap((id) => this.authorService.getById(id))
  );

  private _id!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private authorService: AuthorService,
    private fb: FormBuilder
  ) {
    this.authorForm = this.fb.group(this.inputControls);
  }
  ngOnInit(): void {
    this.author$.subscribe((authorData) => {
      this.authorForm = this.fb.group({
        name: [authorData.name, Validators.required],
        street: [authorData.contactDetails.address.street, Validators.required],
        city: [authorData.contactDetails.address.city, Validators.required],
        postcode: [
          authorData.contactDetails.address.postcode,
          Validators.required,
        ],
        country: [
          authorData.contactDetails.address.country,
          Validators.required,
        ],
        phone: [authorData.contactDetails.phone, Validators.required],
      });
    });
  }
  onSubmit(): void {
    const updatedAuthor: Author = {
      id: this._id,
      name: this.authorForm.value.name,
      street: this.authorForm.value.street,
      city: this.authorForm.value.city,
      postcode: this.authorForm.value.postcode,
      country: this.authorForm.value.country,
      phone: this.authorForm.value.phone,
    };
    this.store.dispatch(
      editAuthorItemFormSubmitted({ editAuthor: updatedAuthor })
    );
  }
}
