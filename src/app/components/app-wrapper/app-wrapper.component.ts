import {
  Component, EventEmitter, Output, ViewChild,
} from '@angular/core';
import SearchComponent from '../search/search.component';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
})
export default class AppWrapperComponent {
  isFilterVisible: boolean = false;

  toggleFilter(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  @Output()
    requestSubmitted = new EventEmitter();

  @ViewChild('responseData')
    searchComponent!: SearchComponent;

  showResults(): void {
    this.searchComponent.showResults();
  }
}
