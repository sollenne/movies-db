import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MoviesService {
  private moviePath: string;
  private genrePath: string;

  public movies: Array<any>;
  public genres: Array<any>;

  constructor(
    private http: Http,
  ) {
    this.moviePath = 'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=7d747601908140c3a4c8b02195bc7786';

    this.genrePath = 'https://api.themoviedb.org/3/genre/movie/list?api_key=7d747601908140c3a4c8b02195bc7786';

    this.movies = [];
    this.genres = [];
  }

  public extractData = (res: any): any => {
    try {
      const body = res.json();
      return body || [];
    } catch (err) {
      return [];
    }
  }

  public handleError = (error: any): any => {
    if (error && error.name === 'TimeoutError') {
      return Observable.throw('TimeoutError');
    } else {
      const body = JSON.parse(error._body);
      const httpSubCode = body.error.httpSubCode;
      const errMsg = {
        message: body.error.message,
        subCode: body.error.subCode,
        responseBody: body,
      };

      if (httpSubCode) {
        return Observable.throw(httpSubCode);
      }
      return Observable.throw(errMsg);
    }
  }

  public getMovies = (): Observable<any> => {
    return this.http.get(this.moviePath)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getGenres = (): Observable<any> => {
    return this.http.get(this.genrePath)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
