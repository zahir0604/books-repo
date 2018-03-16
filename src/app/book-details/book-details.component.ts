import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';
import {CommentsService} from '../comments.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private commentsService: CommentsService) {
  }

  @Input() book: Book;

  comment: Comment = {bookId: '', comment: '', rating: '1', user: 'Admin'};

  comments: Comment[];

  onAdd(comment: Comment): void {
    comment.bookId = this.book.isbnId;
    comment.user = 'Admin';
    this.commentsService.addComment(comment).subscribe(comments => this.getComments(this.book.isbnId));
    this.clear();
  }

  ngOnInit() {
  }

  getComments(bookId: string): void {
    this.commentsService.getComments(bookId).subscribe(comments => this.comments = comments);
  }

  clear(): void {
    this.comment.bookId = '';
    this.comment.comment = '';
    this.comment.rating = '1';
    this.comment.user = '';
  }
}
