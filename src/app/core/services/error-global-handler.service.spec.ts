import { TestBed } from '@angular/core/testing';

import { ErrorGlobalHandlerService } from './error-global-handler.service';

describe('ErrorGlobalHandlerService', () => {
  let service: ErrorGlobalHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorGlobalHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
