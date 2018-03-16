import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {BookDetailsComponent} from '../book-details/book-details.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book = { isbnId: '', title: '' ,  user: 'Admin'};
  books: Book[];
  @ViewChild(BookDetailsComponent) booksDetail: BookDetailsComponent;

  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.booksDetail.getComments(book.isbnId);
  }

  onAdd(book: Book): void {
    this.bookService.addBook( book).subscribe(books => this.getBooks());
    this.clear();
  }

  clear(): void {
    this.book.title = '';
    this.book.isbnId = '';
  }

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
