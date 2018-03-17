import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Books Repo';

  user: string;
  validUser: string;

  constructor(private cookieService: CookieService) {
  }

  allow(user: string): void {
    if (user.trim() === '') {
      alert('user cannot be empty');
      return;
    }
    this.validUser = user;
    this.cookieService.put('user', user);
  }

  ngOnInit() {
    this.validUser = this.getCookie('user');
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
