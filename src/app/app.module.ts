import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksByUserComponent } from './booksByUser/booksByUser.component';
import {BookService} from './book.service';
import {CommentsService} from './comments.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommentsByUserComponent } from './commentsByUser/commentsByUser.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksByUserComponent,
    BookDetailsComponent,
    CommentsByUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BookService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
