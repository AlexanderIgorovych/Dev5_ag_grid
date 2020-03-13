export interface ISearchResult {
  kind: string;
  etag: string;
  id: { kind: string; videoId: string };
  snippet: ISnippet;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ISearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: ISearchResult[];
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
