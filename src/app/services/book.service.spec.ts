import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './book.service';
import {BOOK, BOOKS} from './mock.service';
import {of} from 'rxjs/observable/of';
import {Book} from '../book';

describe('BookService', () => {
  let bookservice: BookService;
  let books: Book[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BookService]
    });
  });

  beforeEach(() => {
    books = [];
    bookservice = TestBed.get(BookService);
    spyOn(bookservice, 'getBooksByUser').and.returnValue(of(BOOKS));
    spyOn(bookservice, 'getAllOtherBooks').and.returnValue(of(BOOKS));
    spyOn(bookservice, 'addBook').and.returnValue(of(BOOKS));
  });

  it('book service should be created', (() => {
    expect(bookservice).toBeTruthy();
  }));

  it('books by user url should be /books', (() => {
    expect(bookservice.booksByUserUrl).toContain('/books');
  }));

  it('all other books url should be /allotherbooks', (() => {
    expect(bookservice.allOtherBooksUrl).toContain('/allotherbooks');
  }));

  it('should return list of books for books by user', (() => {
    bookservice.getBooksByUser('admin').subscribe(temp => books = temp);
    expect(books.length).toBe(4);
  }));

  it('should return list of books for all other users', (() => {
    bookservice.getAllOtherBooks('admin').subscribe(temp => books = temp);
    expect(books.length).toBe(4);
  }));

  it('should return list of books after adding a book', (() => {
    bookservice.addBook(BOOK).subscribe(temp => books = <any>temp );
    expect(books.length).toBe(4);
  }));

});
