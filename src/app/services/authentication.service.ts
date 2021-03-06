import { Address } from 'src/app/models/address';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';
import { AuthConstants } from '../utils/auth-constants';
import { Endpoints } from '../utils/api-endpoints';
import { ResetPassword } from '../models/reset-password';
import { UpdatePassword } from '../models/update-password';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient, private storageService: StorageService) { }

  login(loginData: Login): Observable<any> {
    const url = environment.apiUrl + Endpoints.login;
    return this.http.post<any>(url, loginData)
      .pipe(
        tap(tokens => this.doLoginUser(loginData, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }


  resetPassword(resetPasswordData: ResetPassword): Observable<any> {
    const url = environment.apiUrl + Endpoints.resetPassword;
    return this.http.post(url, resetPasswordData);
  }

  updatePassword(updatePasswordData: UpdatePassword): Observable<any> {
    const url = environment.apiUrl + Endpoints.updatePassword;
    return this.http.post(url, updatePasswordData);
  }

  register(registerdData: Register): Observable<any> {
    const url = environment.apiUrl + Endpoints.register;
    return this.http.post(url, registerdData);
  }

  updateUserInformation(updateUserInformationData: Address): Observable<any> {
    const url = environment.apiUrl + Endpoints.updateUserInformation;
    return this.http.put(url, updateUserInformationData);
  }


  getUserById(id: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getUserById + id;
    return this.http.get(url);
  }

  logout() {
    const url = environment.apiUrl + Endpoints.logout;
    return this.http.post<any>(url, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken(userName: string) {
    const url = environment.apiUrl + Endpoints.refreshToken;
    return this.http.post<any>(url, {
      userName
    }).pipe(
      tap((tokens: any) => {
        console.log('refresh token', tokens)
        this.storeJwtToken(tokens.accessToken);
      }),
      catchError(error => {
        console.log('error token', error)
        return of(false);
      })
    );
  }


  refreshTokentst(userName: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.refreshToken;
    return this.http.post<any>(url, {
      userName
    })
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(user: Login, tokens: any) {
    this.loggedUser = user.userName;
    this.storageService.saveStorage(AuthConstants.AUTH, tokens.userId);
    this.storageService.saveStorage(AuthConstants.AUTH_PASS, user.password);
    this.storageService.saveStorage(AuthConstants.AUTH_NAME, user.userName);
    this.storageService.saveStorage(AuthConstants.AUTH_ROLE, tokens.role);
    this.storageService.saveStorage(AuthConstants.AUTH_FIRST_LOGIN, tokens.firstLogin);
    this.storageService.saveToken(tokens.accessToken);

    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: any) {
    localStorage.setItem(this.JWT_TOKEN, tokens.accessToken);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
