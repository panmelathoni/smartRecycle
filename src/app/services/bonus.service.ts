import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../utils/api-endpoints';


@Injectable({
  providedIn: 'root'
})
export class BonusService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  };

  constructor(private http: HttpClient) { }
  
  
  getRecycleBonusOptions(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleBonusOptions;
    return this.http.get(url, this.httpOptions);
  }

  getBonusUsageHistoryByUser(userId : string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getBonusUsageHistoryByUser + userId;
    return this.http.get(url, this.httpOptions);
  }

  updateDebitBonus(updateBonus: any): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateBonus;
    return this.http.post(url, updateBonus, this.httpOptions);
  }

}
