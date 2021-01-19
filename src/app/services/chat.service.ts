import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chat } from '../models/chat';
import { UptadeChat } from '../models/update-chat';
import { Endpoints } from '../utils/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  };

  constructor(private http: HttpClient) { }

  getChatHistoryByUser(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getChatHistoryByUser;
    return this.http.get(url, this.httpOptions);
  }

  createChat(createChatData: Chat): Observable<any> {
    const url = environment.apiUrl + Endpoints.createChat;
    return this.http.post(url, createChatData, this.httpOptions);
  }

  updateChat(updateChatData: Chat): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateChat;
    return this.http.put(url, updateChatData, this.httpOptions);
  }


}
