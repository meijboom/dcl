import { TestBed } from '@angular/core/testing';

import { ComponentDataService } from '../component-data.service';

describe('ComponentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentDataService = TestBed.get(ComponentDataService);
    expect(service).toBeTruthy();
  });
});
