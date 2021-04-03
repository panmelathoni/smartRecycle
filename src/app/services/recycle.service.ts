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

  /** Service Layer - Get all categories from API*/
  getRecycleCategories(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleCategories;
    return this.http.get(url);
  }

  /** Service Layer - Get Material by Category Id*/
  getMaterialByCategory(categoryId: number): Observable<any> {
    const url = environment.apiUrl + Endpoints.getMaterialByCategory + categoryId;
    return this.http.get(url);
  }

  /** Service Layer - Get Category By Id*/
  getCategorylById(categoryId: number): Observable<any> {
    const url = environment.apiUrl + Endpoints.getCategoryById + categoryId;
    return this.http.get(url);
  }

  /** Service Layer - Get User History Data*/
  getHistoryByUser(userId: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getRecycleHistoryByUser + userId;
    return this.http.get(url);
  }

  /** Service Layer - Create Material*/
  createMaterial(createMateraildata: Material): Observable<any> {
    const url = environment.apiUrl + Endpoints.createMaterial;
    return this.http.post(url, createMateraildata);
  }

  /** Service Layer - Update Material*/
  updateMaterial(updateMaterialdata: Material): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateMaterial;
    return this.http.put(url, updateMaterialdata);
  }

  /** Service Layer - Create Category*/
  createCategory(createCategoryData: Category): Observable<any> {
    const url = environment.apiUrl + Endpoints.createCategory;
    return this.http.post(url, createCategoryData);
  }

  /** Service Layer - Update Category*/
  updateCategory(updateCategorydata: Category): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateCategory;
    return this.http.put(url, updateCategorydata);
  }

  /** Service Layer - Create Recycle History*/
  createRecycleHistory(createRecycleHistoryData: Recycle): Observable<any> {
    const url = environment.apiUrl + Endpoints.createRecycleHistory;
    return this.http.post(url, createRecycleHistoryData);
  }

  /** Service Layer - Update Recycle History*/
  updateRecycleHistory(updateRecycleHistoryData: Recycle): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateRecycleHistory;
    return this.http.put(url, updateRecycleHistoryData);
  }

  /** Service Layer - Get all Recycle locals*/
  getClosestRecyclePoints(userId: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getClosestRecyclePoints + userId;
    return this.http.get(url);
  }

  /** Service Layer - Get all Recycle locals*/
  getRecycleLocals(): Observable<any> {
    const url = environment.apiUrl + Endpoints.getAllRecycleLocals;
    return this.http.get(url);
  }

  /** Service Layer - Create a new Recycle Local*/
  createRecycleLocal(createRecycleLocalData: Local): Observable<any> {
    const url = environment.apiUrl + Endpoints.createRecycleLocal;
    return this.http.post(url, createRecycleLocalData);
  }

  /** Service Layer - Update Recycle Local*/
  updateRecycleLocal(updateRecycleLocalData: Local): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateRecycleLocal;
    return this.http.put(url, updateRecycleLocalData);
  }

  /** Service Layer - Get all available materials*/
  getAvailableMaterials(userId: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getAvailableMaterial + userId;
    return this.http.get(url);
  }

  /** Service Layer - Update Recycle Local*/
  requestAvailableMaterial(materialData: any): Observable<any> {
    const url = environment.apiUrl + Endpoints.requestMaterial;
    return this.http.put(url, materialData);
  }


}
