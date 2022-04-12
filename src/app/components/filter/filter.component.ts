/* eslint class-methods-use-this: ["error", { "exceptMethods": ["setNewSort"] }] */
import { Component, EventEmitter, Output } from '@angular/core';
import { IFilter } from 'src/app/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export default class FilterComponent {
  @Output() private filterApplied = new EventEmitter();

  public filter: IFilter = {
    date: false,
    views: false,
    keyword: '',
  };

  updateFilter(optionElem: HTMLElement): void {
    if (optionElem.closest('#filterByDate')) {
      this.filter.date = this.setNewSort(this.filter.date);
      this.filter.views = false;
    }

    if (optionElem.closest('#filterByViewsCount')) {
      this.filter.views = this.setNewSort(this.filter.views);
      this.filter.date = false;
    }

    if (optionElem.closest('#filterByKeyword')) {
      const { value } = optionElem as HTMLInputElement;
      this.filter.keyword = (value.trim())
        ? value.trim().toLocaleLowerCase()
        : false;
    }
  }

  setNewSort = (newSort: false | 'asc' | 'desc'): false | 'asc' | 'desc' => ((!newSort || newSort === 'desc')
    ? 'asc'
    : 'desc');

  filterResults(e: Event): void {
    this.updateFilter(e.target as HTMLElement);
    this.filterApplied.emit(this.filter);
  }
}
