export interface SearchItemInterface {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: SearchItemTumbnail,
      medium: SearchItemTumbnail,
      high: SearchItemTumbnail,
      standard: SearchItemTumbnail,
      maxres: SearchItemTumbnail
    },
    channelTitle: string,
    tags: string[],
    categoryId: number,
    liveBroadcastContent: string,
    localized: SearchItemLocalised,
    defaultAudioLanguage: string
  },
  statistics: SearchItemStatistics
}

interface SearchItemTumbnail {
  url: string,
  width: number,
  heigh: number,
}

interface SearchItemLocalised {
  title: string,
  description: string
}

interface SearchItemStatistics {
  viewCount: number,
  likeCount: number,
  favoriteCount: number,
  dislikeCount: number,
  commentCount: number
}