import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book = { isbnId: '', title: '' ,  user: 'Admin'};
  books: Book[];

  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  onAdd(isbnId: string, title: string, user: string): void {
    this.bookService.addBook( {isbnId, title, user } as Book).subscribe(books => this.getBooks());
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
