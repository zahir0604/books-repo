import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-other-books',
  templateUrl: './allOtherBooks.component.html',
  styleUrls: ['./allOtherBooks.component.css']
})
export class AllOtherBooksComponent implements OnInit {

  book: Book = { isbnId: '', title: '' ,  user: ''};
  books: Book[];

  user: string;

  constructor(private bookService: BookService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get( 'user');
    this.getBooks(this.user );
  }

  getBooks(user: string): void {
    this.bookService.getAllOtherBooks(user).subscribe(books => this.books = books);
  }

}
