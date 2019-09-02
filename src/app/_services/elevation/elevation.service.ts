import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevationService {

  baseUrl = 'https://api.airmap.com/elevation/v1/ele?points=';

  constructor(private http: HttpClient) { }

  public getElevation(lng:number,lat:number): Observable<any> {
    console.log(`${this.baseUrl}${lng},${lat}`);
    return this.http.get<any>(`${this.baseUrl}${lng},${lat}`);
  }

}