import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membre } from 'src/app/models/membre/membre.model';
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  baseUrl = 'http://localhost:8080/membres';

  constructor(private http: HttpClient) { }

  public getMembres(): Observable<Membre[]> {
    return this.http.get<Membre[]>(this.baseUrl);
  }

  public getMembreById(id: number): Observable<Membre> {
    return this.http.get<Membre>((`${this.baseUrl}/${id}`));
  }

  public getMembresByUtilisateurId(id: number): Observable<Membre[]> {
    return this.http.get<Membre[]>((`${this.baseUrl}/idutilisateur/${id}`));
  }

  public getMembresByTrajetId(id: number): Observable<Membre[]> {
    return this.http.get<Membre[]>((`${this.baseUrl}/idtrajet/${id}`));
  }

  public addMembre(membre: Membre): Observable<Membre> {
    return this.http.post<Membre>(`${this.baseUrl}`, membre);
  }

  public deleteMembre(id: number): Observable<Membre> {
    return this.http.delete<Membre>(`${this.baseUrl}/${id}`);
  }

}
