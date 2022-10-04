import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IData } from 'src/models/data.inteface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getListOfViodeo(): Observable<IData>{
    let params = new HttpParams().append('part', 'snippet')
                                 .append('chart', 'mostPopular')
                                 .append('maxResults', '10')
                                 .append('key', environment.apiKey);
    
    let gg =  this.http.get<IData>(environment.apiYoutube, {params});

    return gg;
  }
}
