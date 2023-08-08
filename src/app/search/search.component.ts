import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  searchResults: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService.searchMovies(this.query).subscribe(results => {
      this.searchResults = results.results;
    });
  }
}
