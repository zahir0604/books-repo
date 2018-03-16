import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../services/book.service';
import {BookDetailsComponent} from '../book-details/book-details.component';

@Component({
  selector: 'app-all-other-books',
  templateUrl: './allOtherBooks.component.html',
  styleUrls: ['./allOtherBooks.component.css']
})
export class AllOtherBooksComponent implements OnInit {

  book: Book = { isbnId: '', title: '' ,  user: 'Admin'};
  books: Book[];
  @ViewChild(BookDetailsComponent) booksDetail: BookDetailsComponent;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks(this.book.user);
  }

  getBooks(user: string): void {
    this.bookService.getAllOtherBooks(user).subscribe(books => this.books = books);
  }

}
