import { TestBed } from '@angular/core/testing';

import { LoginserviceService } from './loginservice.service';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";

describe('LoginserviceService', () => {
  let service: LoginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

