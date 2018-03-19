import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from '.././app-routing.module';
import { FormsModule } from '@angular/forms';
import { BooksByUserComponent } from '.././booksByUser/booksByUser.component';
import { AllOtherBooksComponent } from '.././allOtherBooks/allOtherBooks.component';
import {CookieService} from 'angular2-cookie/core';
import {CommentsService} from '../services/comments.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from '.././book-details/book-details.component';
import { CommentsByUserComponent } from './commentsByUser.component';
import {COMMENTS_BY_USERS} from "../services/mock.service";
import {of} from "rxjs/observable/of";

describe('CommentsByUserComponent', () => {
  let component: CommentsByUserComponent;
  let fixture: ComponentFixture<CommentsByUserComponent>;
  let commentsService: CommentsService;

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
    fixture = TestBed.createComponent(CommentsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create comments by user component', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading My Comments', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('h2').textContent).toContain('My Comments');
  }));

  it('should have required headers', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('#commentsHeader').textContent).toContain('Book ID');
    expect(page.querySelector('#commentsHeader').textContent).toContain('Title');
    expect(page.querySelector('#commentsHeader').textContent).toContain('Comment');
    expect(page.querySelector('#commentsHeader').textContent).toContain('Rating');
  }));

  it('should get comments on initialization', async(() => {
    commentsService = TestBed.get(CommentsService);
    spyOn(commentsService, 'getCommentsByUser').and.returnValue(of(COMMENTS_BY_USERS));
    component.ngOnInit();
    expect(commentsService.getCommentsByUser).toHaveBeenCalled();
  }));
});
