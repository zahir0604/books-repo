import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '.././app-routing.module';
import { BooksByUserComponent } from '.././booksByUser/booksByUser.component';
import { CommentsByUserComponent } from '.././commentsByUser/commentsByUser.component';
import { BookDetailsComponent } from '.././book-details/book-details.component';
import {APP_BASE_HREF} from '@angular/common';

import { AllOtherBooksComponent } from './allOtherBooks.component';
import {CookieService} from 'angular2-cookie/core';
import {BookService} from '../services/book.service';
import { HttpClientModule } from '@angular/common/http';
import {BOOKS} from '../services/mock.service';
import {of} from 'rxjs/observable/of';

describe('AllOtherBooksComponent', () => {
  let component: AllOtherBooksComponent;
  let fixture: ComponentFixture<AllOtherBooksComponent>;
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
    fixture = TestBed.createComponent(AllOtherBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create All other books component', () => {
    expect(component).toBeTruthy();
  });

  it('should display heading All Other books', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('h2').textContent).toContain('All Other Books');
  }));

  it('should have required headers', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('#booksHeader').textContent).toContain('ISBN ID');
    expect(page.querySelector('#booksHeader').textContent).toContain('Title');
    expect(page.querySelector('#booksHeader').textContent).toContain('User');
  }));

  it('should get books on initialization', async(() => {
    bookService = TestBed.get(BookService);
    spyOn(bookService, 'getAllOtherBooks').and.returnValue(of(BOOKS));
    component.ngOnInit();
    expect(bookService.getAllOtherBooks).toHaveBeenCalled();
  }));
});
