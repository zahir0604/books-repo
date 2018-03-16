import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../services/book.service';
import {BookDetailsComponent} from '../book-details/book-details.component';

@Component({
  selector: 'app-books-by-user',
  templateUrl: './booksByUser.component.html',
  styleUrls: ['./booksByUser.component.css']
})
export class BooksByUserComponent implements OnInit {
  book: Book = { isbnId: '', title: '' ,  user: 'Admin'};
  books: Book[];
  @ViewChild(BookDetailsComponent) booksDetail: BookDetailsComponent;

  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.booksDetail.getComments(book.isbnId);
  }

  onAdd(book: Book): void {
    this.bookService.addBook( book).subscribe(books => this.getBooks(this.book.user));
    this.clear();
  }

  clear(): void {
    this.book.title = '';
    this.book.isbnId = '';
  }

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks(this.book.user);
  }

  getBooks(user: string): void {
    this.bookService.getBooksByUser(user).subscribe(books => this.books = books);
  }

}
