import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByUserComponent } from './booksByUser.component';

describe('BooksByUserComponent', () => {
  let component: BooksByUserComponent;
  let fixture: ComponentFixture<BooksByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
