import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Postulation} from '../models/postulation';

import {ENVIRONMENT_CONFIG as env} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  constructor(private _http: HttpClient) {
  }

  public savePostulation(_postulation: Postulation): Observable<any> {

    let httpParams = new HttpParams();

    Object.keys(_postulation).forEach(function (key) {
      httpParams = httpParams.append(key, _postulation[key]);
    });

    return this._http.post(env.apiUrl.urlPostulation, httpParams);
  }

  public redirection(idPostulation: string): void {

    window.location.href = env.apiUrl.urlRedirection.concat(idPostulation);

  }

}
