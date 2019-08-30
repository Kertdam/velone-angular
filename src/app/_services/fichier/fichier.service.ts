import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fichier } from 'src/app/models/fichier/fichier.model';
@Injectable({
  providedIn: 'root'
})
export class FichierService {
  
  baseUrl = 'http://localhost:8080/fichiers';

  constructor(private http: HttpClient) { }

  public getFichierById(id: number): Observable<Fichier> {
    return this.http.get<Fichier>(`${this.baseUrl}/${id}`);
  }

  public getFichiersByMessageId(id: number): Observable<Fichier[]> {
    return this.http.get<Fichier[]>(`${this.baseUrl}/message/${id}`);
  }

  public addFichier(fichier:Fichier): Observable<Fichier> {
    return this.http.post<Fichier>(`${this.baseUrl}`, fichier);
  }

  public deleteFichier(id: number): Observable<Fichier> {
    return this.http.delete<Fichier>(`${this.baseUrl}/${id}`);
  }

  public updateFichier(Fichier: Fichier): Observable<Fichier> {
    return this.http.put<Fichier>(`${this.baseUrl}/${Fichier.id}`,Fichier);
  }
}
