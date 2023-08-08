import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  watchlist: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.results;
    });
  }

  addToWatchlist(movie: any) {
    this.watchlist.push(movie);
    console.log('Movie added to watchlist:', movie);
  }
}
