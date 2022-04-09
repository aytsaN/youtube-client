interface ISearchItemThumbnail {
  url: string,
  width: number,
  height: number,
}

interface ISearchItemStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

interface ISearchItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    default: ISearchItemThumbnail,
    medium: ISearchItemThumbnail,
    high: ISearchItemThumbnail,
    standard: ISearchItemThumbnail,
    maxres: ISearchItemThumbnail,
  }
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string,
  localized: {
    title: string,
    description: string,
  },
  defaultAudioLanguage: string,
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISearchItemSnippet,
  statistics: ISearchItemStatistics,
}
