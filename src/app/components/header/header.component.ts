import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output()
  private filterToggled = new EventEmitter();

  @Output()
  private requestSubmitted = new EventEmitter();

  toggleFilterComponent(): void {
    this.filterToggled.emit();
  }

  onSearch(): void {
    this.requestSubmitted.emit();
  }
}
