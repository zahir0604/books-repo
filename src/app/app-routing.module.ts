import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksByUserComponent } from './booksByUser/booksByUser.component';
import { CommentsByUserComponent } from './commentsByUser/commentsByUser.component';
import { AllOtherBooksComponent } from './allOtherBooks/allOtherBooks.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: 'books/:user', component: BooksByUserComponent},
  { path: 'commentsByUser/:user', component: CommentsByUserComponent },
  { path: 'allOtherBooks/:user', component: AllOtherBooksComponent },
  { path: 'detail/:bookId/:title', component: BookDetailsComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

