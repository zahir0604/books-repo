import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksByUserComponent } from './booksByUser/booksByUser.component';
import { CommentsByUserComponent } from './commentsByUser/commentsByUser.component';

const routes: Routes = [
  { path: 'books', component: BooksByUserComponent},
  { path: 'commentsByUser', component: CommentsByUserComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

