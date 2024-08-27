import { TestBed } from '@angular/core/testing';

import { TransportСompanyService } from './transportсompany.service';

describe('TransportСompanyService', () => {
  let service: TransportСompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportСompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
