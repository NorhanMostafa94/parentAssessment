import { TestBed } from '@angular/core/testing';

import { UserLogicService } from './user-logic.service';

describe('UserLogicService', () => {
  let service: UserLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
