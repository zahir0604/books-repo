import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '.././app-routing.module';
import { CommentsByUserComponent } from '.././commentsByUser/commentsByUser.component';
import { BookDetailsComponent } from '.././book-details/book-details.component';
import {APP_BASE_HREF} from '@angular/common';

import { AllOtherBooksComponent } from '.././allOtherBooks/allOtherBooks.component';
import {CookieService} from 'angular2-cookie/core';
import {BookService} from '../services/book.service';
import { HttpClientModule } from '@angular/common/http';

import { BooksByUserComponent } from './booksByUser.component';
import {BOOKS} from "../services/mock.service";
import {of} from "rxjs/observable/of";

describe('BooksByUserComponent', () => {
  let component: BooksByUserComponent;
  let fixture: ComponentFixture<BooksByUserComponent>;
  let bookService: BookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, AppRoutingModule, HttpClientModule ],
      declarations: [ AllOtherBooksComponent,
        BooksByUserComponent,
        CommentsByUserComponent,
        BookDetailsComponent],
      providers: [{provide: APP_BASE_HREF, useValue : '/' } , CookieService, BookService]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create books by user component', () => {
    expect(component).toBeTruthy();
  });

  it('should display heading Add a Book', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('h2').textContent).toContain('Add a Book');
  }));

  it('should Have text box to enter ISBN ID and should be able to enter value', async(() => {
    const input = fixture.debugElement.nativeElement.querySelector('#isbnID');
    expect(input).toBeTruthy();
    input.value = '001';
    input.dispatchEvent(new Event('input'));
    expect(component.book.isbnId).toBe('001');
  }));

  it('should Have text box to enter Title and should be able to enter value', async(() => {
    const input = fixture.debugElement.nativeElement.querySelector('#title');
    expect(input).toBeTruthy();
    input.value = 'Title 1';
    input.dispatchEvent(new Event('input'));
    expect(component.book.title).toBe('Title 1');
  }));

  it('should Have a button to add book', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('#add')).toBeTruthy();
    expect(page.querySelector('#add').textContent).toContain('Add');
  }));

  it('should be able to add book', async(() => {
    bookService = TestBed.get(BookService);
    spyOn(bookService, 'addBook').and.returnValue(of(BOOKS));
    spyOn(component, 'onAdd');

    let input = fixture.debugElement.nativeElement.querySelector('#isbnID');
    expect(input).toBeTruthy();
    input.value = '001';
    input.dispatchEvent(new Event('input'));

    input = fixture.debugElement.nativeElement.querySelector('#title');
    expect(input).toBeTruthy();
    input.value = 'Title 1';
    input.dispatchEvent(new Event('input'));

    const button = fixture.debugElement.nativeElement.querySelector('#add');
    button.click();

    expect(component.onAdd).toHaveBeenCalled();

  }));

  it('should have required headers for My Books', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('#booksHeader').textContent).toContain('ISBN ID');
    expect(page.querySelector('#booksHeader').textContent).toContain('Title');
  }));


  it('should get books on initialization', async(() => {
    bookService = TestBed.get(BookService);
    spyOn(bookService, 'getBooksByUser').and.returnValue(of(BOOKS));
    component.ngOnInit();
    expect(bookService.getBooksByUser).toHaveBeenCalled();
  }));


});
