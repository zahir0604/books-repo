import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksByUserComponent } from './booksByUser/booksByUser.component';
import {BookService} from './services/book.service';
import {CommentsService} from './services/comments.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommentsByUserComponent } from './commentsByUser/commentsByUser.component';
import { AllOtherBooksComponent } from './allOtherBooks/allOtherBooks.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksByUserComponent,
    BookDetailsComponent,
    CommentsByUserComponent,
    AllOtherBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BookService,
    CommentsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
