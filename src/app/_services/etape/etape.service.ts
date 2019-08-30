import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etape } from 'src/app/models/etape/etape.model';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {
  baseUrl = 'http://localhost:8080/etapes';

  constructor(private http: HttpClient) { }

  public getEtapes(): Observable<Etape> {
    return this.http.get<Etape>(this.baseUrl);
  }

  public getEtapeById(id: number): Observable<Etape> {
    return this.http.get<Etape>(`${this.baseUrl}/${id}`);
  }

  public getEtapesByIdTrajet(id: number): Observable<Etape[]> {
    return this.http.get<Etape[]>(`${this.baseUrl}/${id}`);
  }

  public addEtape(equipement:Etape): Observable<Etape> {
    return this.http.post<Etape>(`${this.baseUrl}`, equipement);
  }
  public deleteEtape(id: number): Observable<Etape> {
    return this.http.delete<Etape>(`${this.baseUrl}/${id}`);
  }

  public updateEtape(etape: Etape): Observable<Etape> {
    return this.http.put<Etape>(`${this.baseUrl}/${etape.id}`,etape);
  }

}
