import { Component } from '@angular/core';
import RESPONSE from 'src/app/mocks/mock-response';
import { ISearchItem } from './models/search-item.model';
import { ISearchResponse } from './models/search-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  private response!: ISearchResponse;

  public result!: ISearchItem[];

  showResults(): void {
    this.response = RESPONSE;
    this.result = this.response.items;
  }
}
