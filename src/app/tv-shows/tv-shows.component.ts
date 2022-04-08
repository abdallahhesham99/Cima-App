import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MoviesService } from '../movies.service'
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  trendingTv: any[];

  imgPrefix: string = "https://image.tmdb.org/t/p/w500/";

  term: string;

  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getTrending('tv', 'week').subscribe((data) => {

      this.trendingTv = data.results
    })
  }
  getWantedList(mediaType) {
    this._MoviesService.getAll('tv', mediaType).subscribe((data) => {

      this.trendingTv = data.results;
    })
  }
  getByDate(dateType) {
    this._MoviesService.getTrending('tv', dateType).subscribe((data) => {

      this.trendingTv = data.results;
    })
  }
  ngOnInit(): void {
  }

}
