import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlist: any[] = [];

  constructor() {}

  getWatchlist(): any[] {
    return this.watchlist;
  }

  addToWatchlist(movie: any): void {
    this.watchlist.push(movie);
  }

  removeFromWatchlist(movie: any): void {
    const index = this.watchlist.indexOf(movie);
    if (index > -1) {
      this.watchlist.splice(index, 1);
    }
  }
}
