import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {CommentsService} from './comments.service';
import {COMMENT, COMMENTS, COMMENTS_BY_USERS} from './mock.service';
import {of} from 'rxjs/observable/of';
import {Comment} from '../comment';
import {CommentsByUser} from '../commentsByUser';

describe('CommentsService', () => {
  let commentsService: CommentsService;
  let comments: Comment[];
  let commentsByUsers: CommentsByUser[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CommentsService]
    });
  });


  beforeEach(() => {
    comments = [];
    commentsByUsers = [];
    commentsService = TestBed.get(CommentsService);
    spyOn(commentsService, 'getCommentsForBook').and.returnValue(of(COMMENTS));
    spyOn(commentsService, 'getCommentsByUser').and.returnValue(of(COMMENTS_BY_USERS));
    spyOn(commentsService, 'addComment').and.returnValue(of(COMMENTS));
  });

  it('should create comments Services', (() => {
    expect(commentsService).toBeTruthy();
  }));

  it('should verify url to be /comments', (() => {
    expect(commentsService.url).toContain('/comments');
  }));

  it('should return list of comments for book', (() => {
    commentsService.getCommentsForBook('001').subscribe(temp => comments = <any>temp);
    expect(comments.length).toBe(5);
  }));

  it('should return list of comments by user', (() => {
    commentsService.getCommentsByUser('admin').subscribe(temp => commentsByUsers = temp);
    expect(commentsByUsers.length).toBe(6);
  }));

  it('should return list of comments after adding a comment', (() => {
    commentsService.addComment(COMMENT).subscribe(temp => comments = <any>temp);
    expect(comments.length).toBe(5);
  }));

});
