import { Component } from '@angular/core';
import RESPONSE from 'src/app/mocks/mock-response';
import { IFilter } from 'src/app/models/filter.model';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  private response!: ISearchResponse;

  public result!: ISearchItem[];

  public filterOptions!: IFilter;

  showResults(): void {
    this.response = RESPONSE;
    this.result = this.response.items;
  }

  applyFilter(filterOptions: IFilter): void {
    this.filterOptions = filterOptions;
  }
}
