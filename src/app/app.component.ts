import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Books Repo';
  user= '';

  constructor(private cookieService: CookieService) {
  }

  isUserLoggedIn(): boolean {
    this.user = this.getCookie('user');
    if (this.user !== '') {
      return true;
    }
  }

  allow(user: string): void {
    if (user.trim() === '') {
      alert('user cannot be empty');
      return;
    }

    this.cookieService.put('user', user);
  }

  ngOnInit() {

  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
