import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IData } from 'src/models/data.inteface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nextPageToken: string = '';
  constructor(private http: HttpClient) { }

  getListOfViodeo(): Observable<IData>{
    let params = new HttpParams().set('part', 'snippet')
                                 .set('chart', 'mostPopular')
                                 .set('maxResults', '10')
                                 .set('pageToken', this.nextPageToken)
                                 .set('key', environment.apiKey);
    
    return this.http.get<IData>(environment.apiYoutube, {params}).pipe(
      tap(val => {
        this.nextPageToken = val.nextPageToken;
      })
    );
  }
}
