import { BonusService } from './../../services/bonus.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Bonus } from 'src/app/models/bonus';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-recycle-bonus-options',
  templateUrl: './recycle-bonus-options.page.html',
  styleUrls: ['./recycle-bonus-options.page.scss'],
})
export class RecycleBonusOptionsPage implements OnInit {
  public user : UserInformation = new UserInformation();
  public bonusOptions: Bonus[];
  constructor(
    private menuCtrl: MenuController,
    private bonusService: BonusService,
    private toastService: ToastService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.authenticationService.getUserById(this.user.userId).subscribe((res) => {
        this.user = res;
    })
    this.getBonusOptions();
  }

  public getBonusOptions() {
    this.bonusService.getRecycleBonusOptions().subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.bonusOptions = res;
        } else {
          this.toastService.showInfo('No Item data available');
        }
      },
      (error: any) => {
        this.toastService.showError('Network Problem');
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
