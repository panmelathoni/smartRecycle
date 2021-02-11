import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../utils/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  };

  constructor(private http: HttpClient) { }


  getAddressGoogleApi(address : string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getAddressGoogleApi + "?address=" + encodeURIComponent(address);
    return this.http.get(url, this.httpOptions);
  }

  getDirectionsGoogleApi(sourceAddress : string, destinationAddress : string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getDirectionsGoogleApi + '/' +sourceAddress + '/' + destinationAddress;
    return this.http.get(url, this.httpOptions);
  }

  getDistanceGoogleApi(sourceAddress : string, destinationAddress : string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getDistanceGoogleApi + '/' +sourceAddress + '/' + destinationAddress;
    return this.http.get(url, this.httpOptions);
  }
}
