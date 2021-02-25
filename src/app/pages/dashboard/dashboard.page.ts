import { UserInformation } from './../../models/user-information';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public user : UserInformation = new UserInformation();
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastService: ToastService,
    private menuCtrl: MenuController

  ) {
    //enquanto tiver testando nao chamar esse metodo
    //this.userIsLogged();
  }

  async userIsLogged() {
    var userIdLogged = await this.authenticationService.userIsLogged();
    this.authenticationService.getUserById(userIdLogged).subscribe((res: UserInformation) => {
      if (res) {
        console.log('logged user', res)
        this.menuCtrl.enable(true);
        this.user = res;
        return;
      }
      else {
        this.toastService.showMessage("user is not logged in");
        this.authenticationService.logout();
      }
    })
  }

  async logout(){
    await this.authenticationService.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
}