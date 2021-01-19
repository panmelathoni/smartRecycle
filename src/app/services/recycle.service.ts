import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Material } from '../models/material';
import { Recycle } from '../models/recycle';
import { Local } from '../models/local';
import { Endpoints } from '../utils/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class RecycleService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  };

  constructor(private http: HttpClient) { }

  getRecycleCategories(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleCategories;
    return this.http.get(url, this.httpOptions);
  }

  getMaterialByCategory(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getMaterialByCategory;
    return this.http.get(url, this.httpOptions);
  }

  getHistoryByUser(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getChatHistoryByUser;
    return this.http.get(url, this.httpOptions);
  }

  createMaterial(createMateraildata: Material): Observable<any> {
    const url = environment.apiUrl + Endpoints.createMaterial;
    return this.http.post(url, createMateraildata, this.httpOptions);
  }

  updateMaterial(updateMaterialdata: Material): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateMaterial;
    return this.http.put(url, updateMaterialdata, this.httpOptions);
  }

  createCategory(createCategoryData: Category): Observable<any> {
    const url = environment.apiUrl + Endpoints.createCategory;
    return this.http.post(url, createCategoryData, this.httpOptions);
  }

  updateCategory(updateCategorydata: Category): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateCategory;
    return this.http.put(url, updateCategorydata, this.httpOptions);
  }

  createRecycleHistory(createRecycleHistoryData: Recycle): Observable<any> {
    const url = environment.apiUrl + Endpoints.createRecycleHistory;
    return this.http.post(url, createRecycleHistoryData, this.httpOptions);
  }

  updateRecycleHistory(updateRecycleHistoryData: Recycle): Observable<any> { 
    const url = environment.apiUrl + Endpoints.updateRecycleHistory;
    return this.http.put(url, updateRecycleHistoryData, this.httpOptions);
  }


 getRecycleLocals(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleLocals;
    return this.http.get(url, this.httpOptions);
  }

  createRecycleLocal(createRecycleLocalData: Local): Observable<any> {
    const url = environment.apiUrl + Endpoints.createRecycleLocal;
    return this.http.post(url, createRecycleLocalData, this.httpOptions);
  }


  updateRecycleLocal(updateRecycleLocalData: Local): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateRecycleLocal;
    return this.http.put(url, updateRecycleLocalData, this.httpOptions);
  }

}
