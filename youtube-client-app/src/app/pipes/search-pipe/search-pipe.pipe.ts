import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemInterface } from 'src/app/models/search-item.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(searchResults: SearchItemInterface[], inputData: string): SearchItemInterface[] {
    return searchResults.filter((searchRes) => {
      const searchList = searchRes.snippet.title.toLowerCase();
      const data = inputData.toLowerCase();
      return searchList.includes(data);
    });
  }
}
