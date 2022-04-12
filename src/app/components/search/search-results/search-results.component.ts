import { Component, Input } from '@angular/core';
import { IFilter } from 'src/app/models/filter.model';
import { ISearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  @Input() results: ISearchItem[] = [];

  @Input() filterOptions!: IFilter;
}
