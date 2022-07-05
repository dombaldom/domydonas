import { TestBed } from '@angular/core/testing';

import { AppConfiguracionService } from './app-configuracion.service';

describe('AppConfiguracionService', () => {
  let service: AppConfiguracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfiguracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
