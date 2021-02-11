import { Address } from 'src/app/models/address';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';
import { AuthConstants } from '../utils/auth-constants';
import { Endpoints } from '../utils/api-endpoints';
import { ResetPassword } from '../models/reset-password';
import { UpdatePassword } from '../models/update-password';
import { Register } from '../models/register';
import { UserInformation } from '../models/user-information';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  };

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) { }

  login(loginData: Login): Observable<any> {
    console.log('login data', loginData);
    
    const url = environment.apiUrl + Endpoints.login;
    return this.http.post(url, loginData, this.httpOptions);
  }

  resetPassword(resetPasswordData: ResetPassword): Observable<any> {
    const url = environment.apiUrl + Endpoints.resetPassword;
    return this.http.post(url, resetPasswordData, this.httpOptions);
  }

  updatePassword(updatePasswordData: UpdatePassword): Observable<any> {
    const url = environment.apiUrl + Endpoints.updatePassword;
    return this.http.post(url, updatePasswordData, this.httpOptions);
  }

  register(registerdData: Register): Observable<any> {
    const url = environment.apiUrl + Endpoints.register;
    return this.http.post(url, registerdData, this.httpOptions);
  }



  updateUserInformation(updateUserInformationData : Address) : Observable<any> {
    const url = environment.apiUrl + Endpoints.updateUserInformation;
    return this.http.put(url, updateUserInformationData, this.httpOptions);
  }


  async userIsLogged()
  {
    return await this.storageService.readFromStorage(AuthConstants.AUTH);
  }
  
  getUserById(id: string): Observable<any> {
    const url = environment.apiUrl + Endpoints.getUserById + id;
    return this.http.get(url, this.httpOptions);
  }

  // deleteUser(id: string): Observable<any> {
  //   return this.apiService.deleteUser('/api/Users/', id);
  // }

  // updateProfile(loginData: any, id: string): Observable<any> {
  //   return this.apiService.updateProfile('/api/Users/UpdateProfile/' + id, loginData);
  // }

  // changePassword(passwordData: any): Observable<any> {
  //   return this.apiService.changePassword('/api/Users/ChangePassword', passwordData);
  // }

  // getUsers(): Observable<any> {
  //   return this.apiService.getUsers('/api/Users');
  // }

  // register(loginData: any): Observable<any> {
  //   return this.apiService.post('/api/Users/Register', loginData);
  // }

  signOutUser(): Observable<any> {
    const url = environment.apiUrl + Endpoints.logout;
    return this.http.post(url, null, this.httpOptions);
  }

  logout(){
    this.signOutUser().subscribe(
      (res: any) => {
        console.log(res)
        this.storageService.deleteValueFromStorage(AuthConstants.AUTH).then(res => {
          this.router.navigate(['']);
        });
      },
      (error: any) => {
        console.log('Network Issue.', error);
      }
    );
  }

}



