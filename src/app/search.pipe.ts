import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(movie: any[], term: string): any {

    if (!movie || !term) {
      return movie;
    }
    return movie.filter((movie) => {
      
      console.log(movie);

      if (movie && movie.title) {

        return movie.title.toLowerCase().indexOf(term.toLowerCase()) !== -1;

      }else if (movie && movie.name) {

        return movie.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;

      }else if (movie && movie.original_name) {

        return movie.original_name.toLowerCase().indexOf(term.toLowerCase()) !== -1;

      }

    })

  }

}
