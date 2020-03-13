import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { GridService } from '@pages/shared/services/grid.service';


import { Observable, of } from 'rxjs';

class HttpClientMock {
  get(url: string): Observable<any> {
    return of([]);
  }
}

describe('GridService', () => {
  let service: GridService;
  let httpClient: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GridService,
        { provide: HttpClient, useClass: HttpClientMock },
      ],
    });
    service = TestBed.inject(GridService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('endpoint should be equal to "../../../assets/response-mock.json"', () => {
    expect(service.endpoint).toBe('../../../assets/response-mock.json');
  });

  it('should get list of videos from response-mock.json', () => {
    spyOn(httpClient, 'get').and.callThrough();
    service.getListOfVideos();
    expect(httpClient.get).toHaveBeenCalledWith(service.endpoint);
  });
});
