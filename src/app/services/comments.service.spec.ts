import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [CommentsService]
    });
  });

  it('should be created', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));
});
