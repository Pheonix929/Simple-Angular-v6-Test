import { TestBed, inject } from '@angular/core/testing';

import { BasicServiceService } from './basic-service.service';

describe('BasicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicServiceService]
    });
  });

  it('should be created', inject([BasicServiceService], (service: BasicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
