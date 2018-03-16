import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksByUserComponent } from './booksByUser/booksByUser.component';
import { CommentsByUserComponent } from './commentsByUser/commentsByUser.component';
import { AllOtherBooksComponent } from './allOtherBooks/allOtherBooks.component';

const routes: Routes = [
  { path: 'books', component: BooksByUserComponent},
  { path: 'commentsByUser', component: CommentsByUserComponent },
  { path: 'allOtherBooks', component: AllOtherBooksComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

