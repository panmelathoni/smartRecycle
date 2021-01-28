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

  constructor(private http: HttpClient) { }

  getRecycleCategories(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleCategories;
    console.log("aqui",url)
    return this.http.get(url);
  }

  getMaterialByCategory(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getMaterialByCategory;
    return this.http.get(url);
  }

  getHistoryByUser(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getChatHistoryByUser;
    return this.http.get(url);
  }

  createMaterial(createMateraildata: Material): Observable<any> {
    const url = environment.apiUrl + Endpoints.createMaterial;
    return this.http.post(url, createMateraildata);
  }

  updateMaterial(updateMaterialdata: Material): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateMaterial;
    return this.http.put(url, updateMaterialdata);
  }

  createCategory(createCategoryData: Category): Observable<any> {
    const url = environment.apiUrl + Endpoints.createCategory;
    return this.http.post(url, createCategoryData);
  }

  updateCategory(updateCategorydata: Category): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateCategory;
    return this.http.put(url, updateCategorydata);
  }

  createRecycleHistory(createRecycleHistoryData: Recycle): Observable<any> {
    const url = environment.apiUrl + Endpoints.createRecycleHistory;
    return this.http.post(url, createRecycleHistoryData);
  }

  updateRecycleHistory(updateRecycleHistoryData: Recycle): Observable<any> { 
    const url = environment.apiUrl + Endpoints.updateRecycleHistory;
    return this.http.put(url, updateRecycleHistoryData);
  }


 getRecycleLocals(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleLocals;
    return this.http.get(url);
  }

  createRecycleLocal(createRecycleLocalData: Local): Observable<any> {
    const url = environment.apiUrl + Endpoints.createRecycleLocal;
    return this.http.post(url, createRecycleLocalData);
  }


  updateRecycleLocal(updateRecycleLocalData: Local): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateRecycleLocal;
    return this.http.put(url, updateRecycleLocalData);
  }

}
