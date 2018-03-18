import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../services/book.service';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from "angular2-cookie/core";

@Component({
  selector: 'app-all-other-books',
  templateUrl: './allOtherBooks.component.html',
  styleUrls: ['./allOtherBooks.component.css']
})
export class AllOtherBooksComponent implements OnInit {

  book: Book = { isbnId: '', title: '' ,  user: ''};
  books: Book[];

  user: string;

  constructor(private bookService: BookService,   private cookieService: CookieService) {
  }

  ngOnInit() {
    this.user = this.cookieService.get('user');
    this.getBooks(this.user );
  }

  getBooks(user: string): void {
    this.bookService.getAllOtherBooks(user).subscribe(books => this.books = books);
  }

}
