import { Injectable } from '@angular/core';
import { Author, IAuthor } from '../interfaces';
import { Observable, catchError, map, mergeMap, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = `${environment.apiUrl}/api/author`;

  constructor(private http: HttpClient) {}

  // Get all authors
  getAll(): Observable<Author[]> {
    return this.http
      .get<IAuthor[]>(this.apiUrl)
      .pipe(
        map((authorData) =>
          authorData.map(
            (author) =>
              new Author(
                author.id,
                author.name,
                author.contactDetails.address.street,
                author.contactDetails.address.city,
                author.contactDetails.address.postcode,
                author.contactDetails.address.country,
                author.contactDetails.phone
              )
          )
        )
      );
  }

  // Get an author by ID
  getById(id: string): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.apiUrl}/${id}`);
  }

  // Create a new author
  create(data: Author): Observable<Author> {
    return this.http.post<string>(this.apiUrl, data).pipe(
      map((id) => {
        return { ...data, id };
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  // Update an existing author
  update(data: Author): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${data.id}`, data);
  }
}
