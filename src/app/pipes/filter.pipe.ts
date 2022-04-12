/* eslint class-methods-use-this:
  ["error", { "exceptMethods": ["transform", "compareViews", "comparePublishedDates"] }] */
import { Pipe, PipeTransform } from '@angular/core';
import { IFilter } from '../models/filter.model';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export default class FilterPipe implements PipeTransform {
  compareViews(a: ISearchItem, b: ISearchItem): number {
    return +a.statistics.viewCount - +b.statistics.viewCount;
  }

  comparePublishedDates(a: ISearchItem, b: ISearchItem): number {
    return +(new Date(a.snippet.publishedAt)) - +(new Date(b.snippet.publishedAt));
  }

  transform(value: ISearchItem[], filterOptions: IFilter): ISearchItem[] {
    if (!value || !value.length) return value;

    let result = value;

    if (filterOptions?.date) {
      if (filterOptions.date === 'asc') {
        result.sort(this.comparePublishedDates);
      } else {
        result.sort(this.comparePublishedDates);
        result.reverse();
      }
    }

    if (filterOptions?.views) {
      if (filterOptions.views === 'asc') {
        result.sort(this.compareViews);
      } else {
        result.sort(this.compareViews);
        result.reverse();
      }
    }

    if (filterOptions?.keyword) {
      result = result.filter((item) => item.snippet.title
        .toLowerCase()
        .includes(filterOptions.keyword as string));
    }

    return result;
  }
}
