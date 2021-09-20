import { TestBed } from '@angular/core/testing';

import { ServiceCorpsCelesteService } from './service-corps-celeste.service';

describe('ServiceCorpsCelesteService', () => {
  let service: ServiceCorpsCelesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCorpsCelesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
