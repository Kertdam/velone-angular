import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etape } from 'src/app/models/etape/etape.model';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {
  baseUrl = 'http://localhost:8080/etape';

  constructor(private http: HttpClient) { }

  public getEtapeByIdTrajet(id: number): Observable<Etape[]> {
    return this.http.get<Etape[]>(`${this.baseUrl}/${id}`);
  }
}
