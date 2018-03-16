import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsByUserComponent } from './commentsByUser.component';

describe('CommentsByUserComponent', () => {
  let component: CommentsByUserComponent;
  let fixture: ComponentFixture<CommentsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
