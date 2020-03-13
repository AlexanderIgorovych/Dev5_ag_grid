import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { IGridItem } from '@pages/shared/models/grid.model';

import { ISearchListResponse } from '@pages/shared/models';

@Injectable()
export class GridService {
  readonly endpoint: string = '../../../assets/response-mock.json';

  constructor(public httpClient: HttpClient) {}

  getListOfVideos(): Observable<IGridItem[]> {
    return (this.httpClient.get(this.endpoint) as Observable<
      ISearchListResponse
    >).pipe(
      map(response =>
        response.items.map((videoListItem: any) => ({
          thumbnailUrl: videoListItem.snippet.thumbnails.default.url,
          publishedAt: videoListItem.snippet.publishedAt,
          title: {
            videoTitle: videoListItem.snippet.title,
            videoId: videoListItem.id.videoId,
          },
          description: videoListItem.snippet.description,
        }))
      )
    );
  }
}
