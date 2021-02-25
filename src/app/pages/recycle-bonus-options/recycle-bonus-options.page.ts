import { BonusService } from './../../services/bonus.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Bonus } from 'src/app/models/bonus';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recycle-bonus-options',
  templateUrl: './recycle-bonus-options.page.html',
  styleUrls: ['./recycle-bonus-options.page.scss'],
})
export class RecycleBonusOptionsPage implements OnInit {
  public user : UserInformation = new UserInformation();
  public bonusOptions: Bonus[];
  constructor(
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController,
    private bonusService: BonusService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
        //enquanto tiver testando nao chamar esse metodo
    // this.userIsLogged();
    this.menuCtrl.enable(true);
    this.getBonusOptions();
  }

  async userIsLogged() {
    var userIdLogged = await this.authenticationService.userIsLogged();
    
    this.authenticationService.getUserById(userIdLogged).subscribe((res) => {
      if (res) {
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

  public getBonusOptions() {
    this.bonusService.getRecycleBonusOptions().subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.bonusOptions = res;
        } else {
          this.toastService.showMessage('No Item data available');
        }
      },
      (error: any) => {
        this.toastService.showMessage('Network Problem');
        console.log('Network Issue.');
      }
    );
  }

  public checkoutItem(event: Event, item) {
    event.preventDefault();
    event.stopPropagation();
    console.log('TODO : implement bonus usage', item);
  }

}
