import { Recycle } from './../../models/recycle';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BonusService } from 'src/app/services/bonus.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recycle-bonus-history',
  templateUrl: './recycle-bonus-history.page.html',
  styleUrls: ['./recycle-bonus-history.page.scss'],
})
export class RecycleBonusHistoryPage implements OnInit {

  public user: UserInformation = new UserInformation();
  public bonusHistory: Recycle[] = [];
  public noresults : boolean = true;
  public userIdLogged : string;
  constructor(
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController,
    private bonusService: BonusService,
    private toastService: ToastService,
  ) { }

  async ngOnInit() {
    //enquanto tiver testando nao chamar esse metodo
    await this.userIsLogged();
    this.menuCtrl.enable(true);
    this.getBonusOptions();
  }

  async userIsLogged() {
    this.userIdLogged = await this.authenticationService.userIsLogged();

    this.authenticationService.getUserById(this.userIdLogged).subscribe((res) => {
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
    this.bonusService.getBonusUsageHistoryByUser(this.userIdLogged).subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.noresults = res.length == 0 ? true : false;
          this.bonusHistory = res;
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
}
