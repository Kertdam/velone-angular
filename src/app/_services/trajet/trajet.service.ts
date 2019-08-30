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

  public getTrajetByNom(nom: string): Observable<Trajet> {
    return this.http.get<Trajet>(`${this.baseUrl}/${nom}`);
  }

  public getTrajetByTrajetId(id: number): Observable<Trajet> {
    return this.http.get<Trajet>(`${this.baseUrl}/idTrajet/${id}`);
  }

  public addTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.post<Trajet>(`${this.baseUrl}`, trajet);
  }

  public deleteTrajet(id: number): Observable<Trajet> {
    return this.http.delete<Trajet>(`${this.baseUrl}/${id}`);
  }

  public updateTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.put<Trajet>(`${this.baseUrl}/${trajet.id}`, trajet);
  }

}
