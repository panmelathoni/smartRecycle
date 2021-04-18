import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/app/models/login';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: Login = new Login();
  public loginForm: FormGroup;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastService: ToastService,
    private menuCtrl: MenuController,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    });
  }

  register() {
    this.router.navigate(['register']);
  }
  loginAction() {
    this.login.expirationDate = "2021-01-17T16:13:39.226Z";
    this.login.isExpired = false;
    this.login.pin = "";
    this.login.rememberMe = false;
    this.login.fireBaseToken = "";
    this.login.userId = "test";
    this.login.password = this.loginForm.get('password').value;
    this.login.userName = this.loginForm.get('userName').value;

    if (!(this.login.userName === null && this.login.userName === undefined)) {
      this.authenticationService.login(this.login).subscribe(
        (res: any) => {
          console.log(res)
          if (res){
            this.authenticationService.doLoginUser(res, this.login.password);
            this.menuCtrl.enable(true);
            this.toastService.showInfo('Login com sucesso : ' +  res.userName );
            console.log('first login',  res.firstLogin);
            
            if (parseInt(res.firstLogin) == 1)
            {
              this.router.navigate(['rgpd']);  
            }
            else{
              this.router.navigate(['dashboard']);
            }
          }
        },
        (error: any) => {
          this.toastService.showError('Utilizador ou senha Inválidos');
          console.log('Network Issue.', error);
        }
      );
    } else {
      this.toastService.showInfo('Please enter email/username or password.');
      console.log('Please enter email/username or password.');
    }
  }
}
