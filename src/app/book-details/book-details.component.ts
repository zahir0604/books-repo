import {Component, OnInit} from '@angular/core';
import {CommentsService} from '../services/comments.service';
import {Comment} from '../comment';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private commentsService: CommentsService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  bookId: string;

  title: string;

  comment: Comment = {bookId: '', comment: '', rating: '1', user: 'Admin'};

  comments: Comment[];

  onAdd(comment: Comment): void {
    comment.bookId = this.bookId;
    comment.user = 'Admin';
    this.commentsService.addComment(comment).subscribe(comments => this.getComments(this.bookId));
    this.clear();
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.title = this.route.snapshot.paramMap.get('title');
    this.getComments(this.bookId);
  }

  getComments(bookId: string): void {
    this.commentsService.getCommentsForBook(bookId).subscribe(comments => this.comments = comments);
  }

  clear(): void {
    this.comment.bookId = '';
    this.comment.comment = '';
    this.comment.rating = '1';
    this.comment.user = '';
  }
}
