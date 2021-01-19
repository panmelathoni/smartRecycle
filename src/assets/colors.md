
amarelo claro: #f8dc81;
verde clarinho: #eff7e1;
verde claro: #a2d0c1;


claro: #fcf8ec;
Azul claro: #d0e8f2;
verde marinho: #79a3b1;
verde escuro2: #456268;




caminho API
https://smartrecycle.azurewebsites.net



<ion-header>
  <ion-toolbar color="mango">
    <ion-title>Burguer Eats - Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding='true'>
  <form>
    <ion-list>
      <ion-item>
        <img src="assets/icon/burguer1.png" class="image-center" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
  
        <ion-input autocomplete="off" type="text" name="userName" [(ngModel)]="login.userName"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Password</ion-label>
        <ion-input autocomplete="off" type="password" name="password" [(ngModel)]="login.password"></ion-input>
      </ion-item>

      <ion-item lines='none' routerLink='register' (click)="register()">
        <a>Create a New Account</a> 
      </ion-item>
    </ion-list>
    <ion-button expand="block" share="round" color="success" (click)="loginAction()">Login</ion-button>
  </form>
</ion-content>





************ ts  *****

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

import { ToastService } from 'src/app/services/toast.service';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  public login : Login; 

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,

    
    private storageService: StorageService,
    private toastService: ToastService,
    private menuCtrl: MenuController

  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.menuCtrl.enable(false);

   
   }

  validateInputs() {
    let userName = this.login.userName.trim();
    let password = this.login.password.trim();
    return (
      this.login.userName &&
      this.login.password &&
      userName.length > 0 &&
      password.length > 0
    );
  }

  register()
  {
    this.router.navigate(['register']);
  }

  loginAction() {
    console.log(this.login);
    // if (this.validateInputs()) {
    //   this.authenticationService.login(this.login).subscribe(
    //     (res: any) => {
          
    //       if (res) {
    //         this.storageService.saveStorage(AuthConstants.AUTH, res.id);  
    //         this.storageService.saveStorage(AuthConstants.AUTH_PASS, this.user.password);
    //         this.storageService.saveStorage(AuthConstants.AUTH_NAME, res.name);
            
    //             this.menuCtrl.enable(true);
    //             this.toastService.showMessage('Successfully Logged In: ' + user.name);
    //             //this.router.navigate(['users']);
    //             this.router.navigate(['home', user.name, user.id]);
              
    //         //this.router.navigate(['home']);
    //       } else {
    //         this.toastService.showMessage('Invalid Login Data');
    //       }
    //     },
    //     (error: any) => {
    //       this.toastService.showMessage('Network Problem');
    //       console.log('Network Issue.');
    //     }
    //   );
    // } else {
    //   this.toastService.showMessage('Please enter email/username or password.');
    //   console.log('Please enter email/username or password.');
    // }
  }
}
