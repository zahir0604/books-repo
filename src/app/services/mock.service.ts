import {Book} from '../book';
import {Comment} from '../comment';
import {CommentsByUser} from '../commentsByUser';


export const BOOKS: Book[] = [
  { isbnId: '001', title: 'Title 1', user: 'Test User 1' },
  { isbnId: '002', title: 'Title 2', user: 'Test User 2' },
  { isbnId: '003', title: 'Title 3', user: 'Test User 3' },
  { isbnId: '004', title: 'Title 4', user: 'Test User 4' }
];


export const COMMENTS: Comment[] = [
  { bookId: '001', rating: '2', comment: 'comment 1', user: 'Test User 1' },
  { bookId: '001', rating: '3', comment: 'comment 2', user: 'Test User 1' },
  { bookId: '002', rating: '4', comment: 'comment 2', user: 'Test User 1' },
  { bookId: '002', rating: '5', comment: 'comment 3', user: 'Test User 4' },
  { bookId: '003', rating: '1', comment: 'comment 4', user: 'Test User 3' }
];

export const COMMENTS_BY_USERS: CommentsByUser[] = [
  { bookId: '001', title: 'Title 1',  rating: '1', comment: '', user: 'Test User 1' },
  { bookId: '002', title: 'Title 2',  rating: '2', comment: '', user: 'Test User 1' },
  { bookId: '003', title: 'Title 3',  rating: '3', comment: '', user: 'Test User 1' },
  { bookId: '004', title: 'Title 4',  rating: '4', comment: '', user: 'Test User 1' },
  { bookId: '004', title: 'Title 4',  rating: '4', comment: '', user: 'Test User 1' },
  { bookId: '004', title: 'Title 4',  rating: '4', comment: '', user: 'Test User 1' }
];


export const BOOK: Book = { isbnId: '001', title: 'Title 1', user: 'Test User 1' };

export const COMMENT: Comment =  { bookId: '001', rating: '2', comment: 'comment 1', user: 'Test User 1' };

export const COMMENTS_BY_USER: CommentsByUser= { bookId: '001', title: 'Title 1',  rating: '1', comment: '', user: 'Test User 1' };
