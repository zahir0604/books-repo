import {Injectable} from '@angular/core';
import {Book} from '../book';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class BookService {

  booksByUserUrl = environment.apiUrl + '/books';

  allOtherBooksUrl = environment.apiUrl + '/allotherbooks';

  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  getBooksByUser(user: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksByUserUrl + '/' + user);
  }

  getAllOtherBooks(user: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.allOtherBooksUrl + '/' + user);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksByUserUrl, book, httpOptions).pipe(catchError(this.handleError<Book>('addBook')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.status === 400) {
        alert('Book already exists');
        return;
      }

      console.error(error);

      return of(result as T);
    };
  }
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
