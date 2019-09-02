import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  baseUrl = 'https://api-adresse.data.gouv.fr/search/?q=';

  constructor(private http: HttpClient) { }

  public getGeocode(text: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${text}&limit=5&autocomplete=0`);
  }
}
