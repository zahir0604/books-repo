import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOtherBooksComponent } from './allOtherBooks.component';

describe('AllOtherBooksComponent', () => {
  let component: AllOtherBooksComponent;
  let fixture: ComponentFixture<AllOtherBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOtherBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOtherBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
