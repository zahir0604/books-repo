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
import {COMMENTS} from "../services/mock.service";
import {of} from "rxjs/observable/of";

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
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
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the books details commonent', () => {
    expect(component).toBeTruthy();
  });

  it('should display heading Add Your comments', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('h2').textContent).toContain('Add Your comments');
  }));

  it('should Have text area to enter comments and should be able to enter value', async(() => {
    const input = fixture.debugElement.nativeElement.querySelector('#comment');
    expect(input).toBeTruthy();
    input.value = 'some comment';
    input.dispatchEvent(new Event('input'));
    expect(component.comment.comment).toBe('some comment');
  }));

  it('should be able to select Rating', async(() => {
    const select = fixture.debugElement.nativeElement.querySelector('#rating');
    expect(select).toBeTruthy();
    select.value  = '2';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.comment.rating).toBe('2');
  }));

  it('should Have a button to add comment', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('#add')).toBeTruthy();
    expect(page.querySelector('#add').textContent).toContain('Add');
  }));

  it('should be able to add comment', async(() => {
    commentsService = TestBed.get(CommentsService);
    spyOn(commentsService, 'addComment').and.returnValue(of(COMMENTS));
    spyOn(component, 'onAdd');
    const button = fixture.debugElement.nativeElement.querySelector('#add');
    button.click();
    expect(component.onAdd).toHaveBeenCalled();
  }));


  it('should have required headers', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('#commentsHeader').textContent).toContain('Rating');
    expect(page.querySelector('#commentsHeader').textContent).toContain('Comment');
    expect(page.querySelector('#commentsHeader').textContent).toContain('User');
  }));

  it('should get comments for the book on initialization', async(() => {
    commentsService = TestBed.get(CommentsService);
    spyOn(commentsService, 'getCommentsForBook').and.returnValue(of(COMMENTS));
    spyOn(component, 'getComments');
    component.ngOnInit();
    expect(component.getComments).toHaveBeenCalled();
  }));




});
