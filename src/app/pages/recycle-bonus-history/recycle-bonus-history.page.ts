import { RecycleService } from 'src/app/services/recycle.service';
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
  public recycleHistory: any;
  public noresultsBonus : boolean = true;
  public noresultsRecycle : boolean = true;
  public userIdLogged : string;
  constructor(
    private bonusService: BonusService,
    private recycleService: RecycleService,
    private toastService: ToastService,
    private eventBonusUsage: Events 
  ) { }

  ngOnInit() {
    this.userIdLogged = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.getBonusUsage();
    this.getRecycleHistory();
  }

  public getBonusUsage() {    
    this.bonusService.getBonusUsageHistoryByUser(this.userIdLogged).subscribe(
      (res: any) => {
        if (res) {
          console.log('bonus history', res);
          this.noresultsBonus = res.length == 0 ? true : false;
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

  public getRecycleHistory(){
    this.recycleService.getHistoryByUser(this.userIdLogged).subscribe(
      (res: any) => {
        if (res) {
          console.log('recycle history', res);
          this.noresultsRecycle = res.length == 0 ? true : false;
          this.recycleHistory = res;
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
