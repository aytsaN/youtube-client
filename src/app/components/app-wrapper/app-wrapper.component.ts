import {
  Component, EventEmitter, Output, ViewChild,
} from '@angular/core';
import { IFilter } from 'src/app/models/filter.model';
import SearchComponent from '../search/search.component';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
})
export default class AppWrapperComponent {
  @Output()
    requestSubmitted = new EventEmitter();

  isFilterVisible: boolean = false;

  toggleFilter(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  @ViewChild('responseData')
    searchComponent!: SearchComponent;

  showResults(): void {
    this.searchComponent.showResults();
  }

  applyFilter(options: IFilter): void {
    this.searchComponent.applyFilter(options);
  }
}
