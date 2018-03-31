import { TestBed, inject } from '@angular/core/testing';

import { LogvarService } from './logvar.service';

describe('LogvarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogvarService]
    });
  });

  it('should be created', inject([LogvarService], (service: LogvarService) => {
    expect(service).toBeTruthy();
  }));
});
