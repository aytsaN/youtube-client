import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output()
  private filterToggled = new EventEmitter();

  toggleFilterComponent(): void {
    this.filterToggled.emit();
  }

  @Output()
  private requestSubmitted = new EventEmitter();

  onSearch(): void {
    this.requestSubmitted.emit();
  }
}
