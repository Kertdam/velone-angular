import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message/message.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl = 'http://localhost:8080/message';

  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }

  public getMessageById(id: number): Observable<Message> {
    return this.http.get<Message>((`${this.baseUrl}/${id}`));
  }

  public getMessagesByMembreId(id: number): Observable<Message[]> {
    return this.http.get<Message[]>((`${this.baseUrl}/membreid/${id}`));
  }

  public addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}`, message);
  }

  public deleteMessage(id: number): Observable<Message> {
    return this.http.delete<Message>(`${this.baseUrl}/${id}`);
  }

}
