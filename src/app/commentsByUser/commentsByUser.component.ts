import { Component, OnInit } from '@angular/core';
import { CommentsByUser } from '../commentsByUser';
import { CommentsService } from '../services/comments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './commentsByUser.component.html',
  styleUrls: ['./commentsByUser.component.css']
})
export class CommentsByUserComponent implements OnInit {

  comments: CommentsByUser[] = [];

  user: string;

  constructor(private commmentsService: CommentsService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get( 'user');
    this.getComments(this.user);
  }

  getComments(user: string): void {
    this.commmentsService.getCommentsByUser(user)
      .subscribe(comments => this.comments = comments);
  }

}
