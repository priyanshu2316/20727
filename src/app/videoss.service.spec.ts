import { TestBed, inject } from '@angular/core/testing';

import { VideossService } from './videoss.service';

describe('VideossService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideossService]
    });
  });

  it('should be created', inject([VideossService], (service: VideossService) => {
    expect(service).toBeTruthy();
  }));
});
