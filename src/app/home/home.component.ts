import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  trendingMovies: any[];
  trendingTv: any[];
  trendingPeople: any[];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500/";



  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getTrending('movie', 'week').subscribe((data) => {

      data.results.sort((a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average));
      this.trendingMovies = data.results.reverse().slice(0, 10);
    });

    _MoviesService.getTrending('tv', 'week').subscribe((data) => {

      data.results.sort((a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average));
      this.trendingTv = data.results.reverse().slice(0, 10);
    });

    _MoviesService.getTrending('person', 'week').subscribe((data) => {

      data.results.sort((a, b) => parseFloat(a.popularity) - parseFloat(b.popularity));
      this.trendingPeople = data.results.reverse().slice(0, 11);
    })


  }


  ngOnInit(): void {
  }

}
