import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/models/equipement/equipement.model';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  baseUrl = 'http://localhost:8080/equipement';

  constructor(private http: HttpClient) { }

  public getEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.baseUrl);
  }

  public getEquipementById(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.baseUrl}/${id}`);
  }

  public getEquipementByNom(nom: string): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}/nom/${nom}`);
  }

  public addEquipement(equipement: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.baseUrl}`, equipement);
  }

  public deleteEquipement(id: number): Observable<Equipement> {
    return this.http.delete<Equipement>(`${this.baseUrl}/${id}`);
  }

  public updateEquipement(equipement: Equipement): Observable<Equipement> {
    return this.http.put<Equipement>(`${this.baseUrl}/${equipement.id}`, equipement);
  }

  
}
