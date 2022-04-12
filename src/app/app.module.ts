import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchComponent from './components/search/search.component';
import SearchResultsComponent from './components/search/search-results/search-results.component';
import SearchItemComponent from './components/search/search-item/search-item.component';
import FilterComponent from './components/filter/filter.component';
import AppWrapperComponent from './components/app-wrapper/app-wrapper.component';
import FilterPipe from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
    AppWrapperComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
