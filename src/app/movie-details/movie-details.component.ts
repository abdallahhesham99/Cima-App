import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {



  type: any;
  id: any;
  movieDetails: any;
  isPerson: boolean = false;

  personWorks: any[];

  imgPrefix: string = "https://image.tmdb.org/t/p/w500/";

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {

    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesService.getItemDetails(this.type, this.id).subscribe((data) => {

      this.movieDetails = data;
    });

    if (this.type == 'person') {
      this.isPerson = true;
    }
    else {
      this.isPerson = false
    }
  }

  ngOnInit(): void {
  }

}
