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

describe('BooksByUserComponent', () => {
  let component: BooksByUserComponent;
  let fixture: ComponentFixture<BooksByUserComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
