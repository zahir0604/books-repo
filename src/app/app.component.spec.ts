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
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app component', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Books repo'`, async(() => {
    expect(component.title).toEqual('Books Repo');
  }));

  it('should render title Welcome to the Books Repo!', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('h1').textContent).toContain('Welcome to the Books Repo!');
  }));


  it('should have the label enter username', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('label').textContent).toContain('Enter user name:');
  }));

  it('should be able to set username', async(() => {
    const text = fixture.debugElement.nativeElement.querySelector('#userName');
    text.value = 'someValue';
    text.dispatchEvent(new Event('input'));
    expect(component.user).toBe('someValue');
  }));


  it('should have an Enter button', async(() => {
    const page = fixture.nativeElement;
    expect(page.querySelector('Button')).toBeTruthy();
    expect(page.querySelector('Button').textContent).toContain('Enter');
  }));

  it('on succesfull login allow method should be called', async(() => {
    spyOn(component, 'allow');
    const input = fixture.debugElement.nativeElement.querySelector('#userName');
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    const button = fixture.debugElement.nativeElement.querySelector('#enter');
    button.click();
    expect(component.allow).toHaveBeenCalled();
  }));

  it('user should be added to cookie', async(() => {
    component.allow('New User');
    fixture.detectChanges();
    expect(component.getCookie('user')).toBe('New User');
  }));

  it('Should return alert message for blank user name', async(() => {
    spyOn(window, 'alert');
    component.allow(' ');
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalledWith('user cannot be empty');
  }));


});
