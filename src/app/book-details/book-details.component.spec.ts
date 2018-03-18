import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from '.././app-routing.module';
import { FormsModule } from '@angular/forms';
import { BooksByUserComponent } from '.././booksByUser/booksByUser.component';
import { CommentsByUserComponent } from '.././commentsByUser/commentsByUser.component';
import { AllOtherBooksComponent } from '.././allOtherBooks/allOtherBooks.component';
import {CookieService} from 'angular2-cookie/core';
import {CommentsService} from '../services/comments.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, AppRoutingModule, HttpClientModule ],
      declarations: [ AllOtherBooksComponent,
        BooksByUserComponent,
        CommentsByUserComponent,
        BookDetailsComponent],
      providers: [{provide: APP_BASE_HREF, useValue : '/' } , CookieService, CommentsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
