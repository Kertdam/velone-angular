import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PointInteret } from 'src/app/models/PointInteret/point-interet.model';
@Injectable({
  providedIn: 'root'
})
export class PointInteretService {

  baseUrl = 'http://localhost:8080/pointInterets';

  constructor(private http: HttpClient) { }

  public getPointInterets(): Observable<PointInteret[]> {
    return this.http.get<PointInteret[]>(this.baseUrl);
  }

  public getPointInteretById(id: number): Observable<PointInteret> {
    return this.http.get<PointInteret>((`${this.baseUrl}/idPointInteret/${id}`));
  }

  public getPointInteretsByUtilisateurId(id: number): Observable<PointInteret> {
    return this.http.get<PointInteret>((`${this.baseUrl}/idUtilisateur/${id}`));
  }

  public addPointInteret(pointInteret: PointInteret): Observable<PointInteret> {
    return this.http.post<PointInteret>(`${this.baseUrl}`, pointInteret);
  }

  public deletePointInteret(id: number): Observable<PointInteret> {
    return this.http.delete<PointInteret>(`${this.baseUrl}/${id}`);
  }

  public updatePointInteret(pointInteret: PointInteret): Observable<PointInteret> {
    return this.http.put<PointInteret>(`${this.baseUrl}/${pointInteret.id}`, pointInteret);
  }
}
