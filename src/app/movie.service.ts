import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly apiKey: string = environment.apiKey;
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(searchUrl);
  }

  getMovies(): Observable<any> {
    const moviesUrl = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(moviesUrl);
  }

  getMovieDetails(id: string): Observable<any> {
    const detailsUrl = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(detailsUrl);
  }
}
