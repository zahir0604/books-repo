import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Comment} from '../comment';
import {CommentsByUser} from '../commentsByUser';

@Injectable()
export class CommentsService {

  private url = 'http://localhost:8080/1.0/comments';

  comments: Comment[];

  constructor(private http: HttpClient) { }

  getCommentsForBook(bookId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + '/' + bookId);
  }

  getCommentsByUser(user: string): Observable<CommentsByUser[]> {
    return this.http.get<CommentsByUser[]>(this.url + '/user/' + user);
  }


  addComment (comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url, comment, httpOptions);
  }

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
