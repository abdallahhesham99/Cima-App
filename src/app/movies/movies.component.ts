import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  trendingMovie: any[];

  imgPrefix: string = "https://image.tmdb.org/t/p/w500/";

  term: string;

  constructor(private _MoviesService: MoviesService) {

    _MoviesService.getTrending('movie', 'week').subscribe((data) => {

      this.trendingMovie = data.results
    })

  }
  getWantedList(mediaType) {
    this._MoviesService.getAll('movie', mediaType).subscribe((data) => {

      this.trendingMovie = data.results;
    })
  }
  getByDate(dateType) {
    this._MoviesService.getTrending('movie', dateType).subscribe((data) => {

      this.trendingMovie = data.results;
    })
  }
  ngOnInit(): void {
  }

}
