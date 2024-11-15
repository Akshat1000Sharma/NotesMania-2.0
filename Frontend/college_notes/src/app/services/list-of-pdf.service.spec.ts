import { TestBed } from '@angular/core/testing';

import { ListOfPdfService } from './list-of-pdf.service';

describe('ListOfPdfService', () => {
  let service: ListOfPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
