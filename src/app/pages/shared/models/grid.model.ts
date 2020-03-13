export interface IGridItem {
  thumbnailUrl: string;
  publishedAt: string;
  title: IVideo;
  description: string;
}

export interface IVideo {
  videoTitle: string;
  videoId: string;
}
