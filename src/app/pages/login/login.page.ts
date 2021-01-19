import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

import { ToastService } from 'src/app/services/toast.service';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/app/models/login';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login : Login = new Login(); 

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
    this.login.expirationDate = "2021-01-17T16:13:39.226Z";
    this.login.isExpired = false;
    this.login.pin = "";
    this.login.rememberMe = false;
    this.login.fireBaseToken = "";
    this.login.userId = "test";

    console.log(this.login);
    if (this.validateInputs()) {
      this.authenticationService.login(this.login).subscribe(
        (res: any) => {
          console.log(res)
          if (res.authenticated) {
            this.storageService.saveStorage(AuthConstants.AUTH, res.userId);  
            this.storageService.saveStorage(AuthConstants.AUTH_PASS, this.login.password);
            this.storageService.saveStorage(AuthConstants.AUTH_NAME, res.userName);
            this.storageService.saveToken(res.accessToken);
            
                this.menuCtrl.enable(true);
                this.toastService.showMessage('Successfully Logged In: ' + res.userName);
                //this.router.navigate(['users']);
                // this.router.navigate(['home', user.name, user.id]);
              
            // this.router.navigate(['home']);
            this.authenticationService.getUserById(res.userId).subscribe((btfgh : any) => {
              console.log(btfgh)
            })

            
          } else {
            this.toastService.showMessage('Invalid Login Data');
          }
        },
        (error: any) => {
          this.toastService.showMessage('Network Problem');
          console.log('Network Issue.');
        }
      );
    } else {
      this.toastService.showMessage('Please enter email/username or password.');
      console.log('Please enter email/username or password.');
    }
  }
}
