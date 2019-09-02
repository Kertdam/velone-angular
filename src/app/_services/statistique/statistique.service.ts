import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistique } from 'src/app/models/statistique/statistique.model';
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  baseUrl = 'http://localhost:8080/statistiques';

  constructor(private http: HttpClient) { }

  public getStatistiques(): Observable<Statistique[]> {
    return this.http.get<Statistique[]>(this.baseUrl);
  }

  public getStatistiqueById(id: number): Observable<Statistique> {
    return this.http.get<Statistique>((`${this.baseUrl}/${id}`));
  }

  public getStatistiqueByMembreId(id: number): Observable<Statistique[]> {
    return this.http.get<Statistique[]>((`${this.baseUrl}/membreId/${id}`));
  }

  public addStatistique(statistique: Statistique): Observable<Statistique> {
    return this.http.post<Statistique>(`${this.baseUrl}`, statistique);
  }

  public deleteStatistique(id: number): Observable<Statistique> {
    return this.http.delete<Statistique>(`${this.baseUrl}/${id}`);
  }

  public updateStatistique(statistique: Statistique): Observable<Statistique> {
    return this.http.put<Statistique>(`${this.baseUrl}/${statistique.id}`, statistique);
  }
}
