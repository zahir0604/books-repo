import { Component, OnInit } from '@angular/core';
import { CommentsByUser } from '../commentsByUser';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './commentsByUser.component.html',
  styleUrls: ['./commentsByUser.component.css']
})
export class CommentsByUserComponent implements OnInit {

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
