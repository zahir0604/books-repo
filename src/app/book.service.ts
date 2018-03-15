import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {

  private url = 'http://localhost:8080/1.0/books';

  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book, httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
