import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trajet } from 'src/app/models/trajet/trajet.model';
@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  baseUrl = 'http://localhost:8080/trajet';

  constructor(private http: HttpClient) { }

  public getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.baseUrl);
  }

  public getTrajetById(id: number): Observable<Trajet> {
    return this.http.get<Trajet>(`${this.baseUrl}/${id}`);
  }

}
