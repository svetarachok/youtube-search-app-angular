import { SearchItem } from './search-item.model';

export interface SearchResults {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: SearchItem[]
}