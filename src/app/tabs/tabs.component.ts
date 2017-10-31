import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public movies: any;
  public categories: Array<string>;
  public genres: any;

  constructor(
    private moviesService: MoviesService,
  ) {
    this.categories = [
      'all',
      'action',
      'drama',
      'comedy',
    ];
  }

  public ngOnInit(): void {
    this.initGenreList();
  }

  public initGenreList = (): Subscription => {
    return this.moviesService.getGenres().subscribe(
      (res) => {
        this.genres = res;
        console.log(res);
      },
      (err) => {
        // handle the error here
        console.log(err);
      });
  }

}


