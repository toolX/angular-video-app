import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos";

  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._getUrl)
      .pipe(map((response: Response) => response.json()));
  }
}
