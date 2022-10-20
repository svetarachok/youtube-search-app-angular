export interface SearchItemInterface {
  kind: string,
  etag: string,
  id: {
    kind: string
    videoId: string
  } | string,
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
    categoryId: string,
    liveBroadcastContent: string,
    localized: SearchItemLocalised,
    defaultAudioLanguage: string
  },
  statistics: SearchItemStatistics
}

export interface SearchItemTumbnail {
  url: string,
  width: number,
  height: number,
}

export interface SearchItemLocalised {
  title: string,
  description: string
}

export interface SearchItemStatistics {
  viewCount: string,
  likeCount: string,
  favoriteCount: string,
  dislikeCount: string,
  commentCount: string
}