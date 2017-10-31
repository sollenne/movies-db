import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public genres: Array<any>;
  public movies: Array<any>;
  public currentGenre: any;

  constructor(
    private moviesService: MoviesService,
  ) {
    this.movies = [];
    this.currentGenre = 'All';
  }

  public ngOnInit(): void {
    this.initGenreList();
    this.initMovieList();
  }

  public initGenreList = (): Subscription => {
    return this.moviesService.getGenres().subscribe(
      (res) => {
        this.genres = res.genres;
        console.log(this.genres);
      },
      (err) => {
        // handle the error here
        console.log(err);
      });
  }

  public initMovieList = (): Subscription => {
    return this.moviesService.getMovies().subscribe(
      (res) => {
        console.log(res);
        this.movies.push(res.results);
      },
      (err) => {
        // handle the error here
        console.log(err);
      });
  }

  public tabClick = (genre: any): void => {
    this.currentGenre = genre;
  }

}


