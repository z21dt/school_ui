import { TestBed } from '@angular/core/testing';

import { SchoolConfigurationService } from './school-configuration.service';

describe('SchoolConfigurationService', () => {
  let service: SchoolConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
