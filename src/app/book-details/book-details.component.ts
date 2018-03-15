import { Component, OnInit, Input  } from '@angular/core';
import {Book} from '../book';
import {CommentsService} from '../comments.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  @Input() book: Book;

  comment: Comment = { bookId: '' , comment: '', rating: '1', user: 'Admin' };

  comments: Comment[];

  onAdd(isbnId: string, text: string, rating: string, user: string): void {

   console.log(isbnId);
    console.log(text);
    console.log(rating);
    console.log(user);
  }

  ngOnInit() {
  }

  getComments(): void {
    this.commentsService.getComments().subscribe(comments => this.comments = comments);
  }
}
