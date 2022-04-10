import { Component, Input, OnChanges } from '@angular/core';
import { ISearchItem, ISearchItemStatistics } from '../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnChanges {
  @Input() item!: ISearchItem;

  public imgSrc: string = '';

  public title: string = '';

  public statistics: ISearchItemStatistics = {
    viewCount: '0',
    likeCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    commentCount: '0',
  };

  public publicationDate!: Date;

  public publicationDateColorScheme: { [key: string]: boolean } = {
    blue: true,
    green: false,
    red: false,
  };

  ngOnChanges() {
    this.imgSrc = this.item.snippet.thumbnails.medium.url;
    this.title = this.item.snippet.title;
    if (this.statistics) {
      this.statistics = this.item.statistics;
    }
    this.publicationDate = new Date(this.item.snippet.publishedAt);

    this.setItemColor(this.publicationDate);
  }

  setItemColor(publicationDate: Date): void {
    function getDifferenceInDays(date1: Date, date2: Date) {
      const diffInMs = +date2 - +date1;
      return diffInMs / (1000 * 60 * 60 * 24);
    }

    Object.keys(this.publicationDateColorScheme).forEach((key) => {
      this.publicationDateColorScheme[key] = false;
    });

    const todayDate = new Date();
    const dateDifference = getDifferenceInDays(publicationDate, todayDate);

    if (dateDifference < 7) {
      this.publicationDateColorScheme['blue'] = true;
    } else if (dateDifference <= 30) {
      this.publicationDateColorScheme['green'] = true;
    } else if (dateDifference > 30) {
      this.publicationDateColorScheme['red'] = true;
    }
  }
}
