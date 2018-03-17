import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-by-user',
  templateUrl: './booksByUser.component.html',
  styleUrls: ['./booksByUser.component.css']
})
export class BooksByUserComponent implements OnInit {

  user: string;

  book: Book = { isbnId: '', title: '' ,  user: ''};
  books: Book[];


  onAdd(book: Book): void {
    this.bookService.addBook( book).subscribe(books => this.getBooks(this.user));
    this.clear();
  }

  clear(): void {
    this.book.title = '';
    this.book.isbnId = '';
  }

  constructor(private bookService: BookService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('user');
    this.getBooks( this.user);
    this.book.user = this.user;
  }

  getBooks(user: string): void {
    this.bookService.getBooksByUser(user).subscribe(books => this.books = books);
  }

}
