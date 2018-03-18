import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BooksByUserComponent} from './booksByUser/booksByUser.component';
import {CommentsByUserComponent} from './commentsByUser/commentsByUser.component';
import {AllOtherBooksComponent} from './allOtherBooks/allOtherBooks.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {APP_BASE_HREF} from '@angular/common';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  let testAppComponent: AppComponent;
  let testAppFixure: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AppRoutingModule],
      declarations: [
        AppComponent,
        BooksByUserComponent,
        CommentsByUserComponent,
        AllOtherBooksComponent,
        BookDetailsComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, CookieService]
    }).compileComponents();
  }));

  beforeEach(() => {
    testAppFixure = TestBed.createComponent(AppComponent);
    testAppComponent = testAppFixure.componentInstance;
    testAppFixure.detectChanges();
  });


  it('should create the app component', async(() => {
    expect(testAppComponent).toBeTruthy();
  }));

  it(`should have as title 'Books repo'`, async(() => {
    expect(testAppComponent.title).toEqual('Books Repo');
  }));

  it('should render title Welcome to the Books Repo!', async(() => {
    const page = testAppFixure.nativeElement;
    expect(page.querySelector('h1').textContent).toContain('Welcome to the Books Repo!');
  }));


  it('should prompt to enter username', async(() => {
    const page = testAppFixure.nativeElement;
    expect(page.querySelector('label').textContent).toContain('Enter user name:');
  }));

  it('should be able to set username', async(() => {
    const text = testAppFixure.debugElement.query(By.css('input')).nativeElement;
    text.value = 'someValue';
    text.dispatchEvent(new Event('input'));
    expect(testAppComponent.user).toBe('someValue');
  }));


  it('should have an Enter button', async(() => {
    const page = testAppFixure.nativeElement;
    expect(page.querySelector('Button')).toBeTruthy();
    expect(page.querySelector('Button').textContent).toContain('Enter');
  }));

  it('on succesfull login allow method should be called', async(() => {
    const spy = spyOn(testAppComponent, 'allow');
    testAppFixure.detectChanges();
    const input = testAppFixure.debugElement.query(By.css('input')).nativeElement;
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    expect(testAppComponent.user).toBe('new value');
    const button = testAppFixure.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  }));

  it('user should be added to cookie', async(() => {
    testAppComponent.allow('New User');
    testAppFixure.detectChanges();
    expect(testAppComponent.getCookie('user')).toBe('New User');
  }));

  it('Should return alert message for blank user name', async(() => {
    spyOn(window, 'alert');
    testAppComponent.allow(' ');
    testAppFixure.detectChanges();
    expect(window.alert).toHaveBeenCalledWith('user cannot be empty');
  }));


});
