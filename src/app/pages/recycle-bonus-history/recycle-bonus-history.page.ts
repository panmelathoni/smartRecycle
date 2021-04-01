import { Recycle } from './../../models/recycle';
import { Component, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/models/user-information';
import { BonusService } from 'src/app/services/bonus.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { Events } from 'src/app/utils/events.service';

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
    private bonusService: BonusService,
    private toastService: ToastService,
    private eventBonusUsage: Events 
  ) { }

  ngOnInit() {
    this.userIdLogged = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.getBonusOptions();
  }

  public getBonusOptions() {    
    this.bonusService.getBonusUsageHistoryByUser(this.userIdLogged).subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.noresults = res.length == 0 ? true : false;
          this.bonusHistory = res;
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

  public throwBounsUsageEvent(){
    this.eventBonusUsage.publish('user:bonus', "");
  }
}
