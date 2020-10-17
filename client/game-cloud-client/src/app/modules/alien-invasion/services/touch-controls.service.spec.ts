import { TestBed } from '@angular/core/testing';

import { TouchControlsService } from './touch-controls.service';

describe('TouchControlsService', () => {
  let service: TouchControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouchControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
