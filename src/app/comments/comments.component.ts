import { Component, OnInit } from '@angular/core';
import { CommentsByUser } from '../commentsByUser';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentsByUser[] = [];

  constructor(private commmentsService: CommentsService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.commmentsService.getCommentsByUser('admin')
      .subscribe(comments => this.comments = comments);
  }

}
