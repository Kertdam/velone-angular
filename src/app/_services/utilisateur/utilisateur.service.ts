import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  baseUrl = 'http://localhost:8080/utilisateur';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.baseUrl);
  }

  public getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.baseUrl}/${id}`);
  }

  public getUserByNomOrPrenom(nom:string,prenom:string){
    return this.http.get<Utilisateur>(`${this.baseUrl}/${nom}/$`);
  }

  public addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseUrl}`, utilisateur);
  }

  public deleteUtilisateur(id: number): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(`${this.baseUrl}/${id}`);
  }

  public updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.baseUrl}/${utilisateur.id}`, utilisateur);
  }
}
