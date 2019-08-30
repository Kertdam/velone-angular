import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  baseUrl = 'http://localhost:8080/trajets';

  constructor(private http: HttpClient) { }

  public getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.baseUrl);
  }

  public getTrajetById(id: number): Observable<Trajet> {
    return this.http.get<Trajet>(`${this.baseUrl}/${id}`);
  }

  public addTrajet(trajet: Trajet): Observable<Trajet>  {
    return this.http.post<Trajet>(this.baseUrl, trajet);

  }

  public getTrajetsByMembreId(id: number): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(`${this.baseUrl}/membreId/${id}`);
  }


}
