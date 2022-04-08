import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople: any[];


  imgPrefix: string = "https://image.tmdb.org/t/p/w500/";

  term: string;
  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getTrending('person', 'week').subscribe((data) => {

      this.trendingPeople = data.results;
    })
  
  }
  getWantedList(mediaType) {
    this._MoviesService.getAll('person', mediaType).subscribe((data) => {

      this.trendingPeople = data.results;
    })
  }
  getByDate(dateType) {
    this._MoviesService.getTrending('person', dateType).subscribe((data) => {

      this.trendingPeople = data.results;
    })
  }
  ngOnInit(): void {
  }

}
