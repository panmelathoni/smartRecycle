import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chat } from '../models/chat';
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

  getChatHistoryByUser(id: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getChatHistoryByUser + id;
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

  getMockChat():any{
    var retorno: any[] = [{
answer: "verificaremos em breve seu pedido",
createdBy: "string",
createdOn: "2021-03-08T13:18:14.717",
message: "Eu sou lindo e inteligente",
updatedBy: "string",
updatedOn: "2021-03-08T13:18:14.717",
userAnswerId: "1a321d25-a17a-40ca-9f54-a4c66e8a071f",
userAnswerName: "pan",
userChatId: 1,
userId: "0caa4bcf-cdc9-4ca4-aaa7-d5dbd22db04a",
userName: "recycle",
    }]
    return retorno;
  }


}
