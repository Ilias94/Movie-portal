import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: any[] = [];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.watchlist = this.watchlistService.getWatchlist();
  }

  removeFromWatchlist(movie: any): void {
    this.watchlistService.removeFromWatchlist(movie);
  }
}
