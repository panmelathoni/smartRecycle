import { BonusService } from './../../services/bonus.service';
import { Component, OnInit } from '@angular/core';
import { Bonus } from 'src/app/models/bonus';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { Events } from 'src/app/utils/events.service';

@Component({
  selector: 'app-recycle-bonus-options',
  templateUrl: './recycle-bonus-options.page.html',
  styleUrls: ['./recycle-bonus-options.page.scss'],
})
export class RecycleBonusOptionsPage implements OnInit {
  public bonusOptions: Bonus[];
  constructor(
    private bonusService: BonusService,
    private toastService: ToastService,
    private eventBonusUsage: Events 

  ) { }

  ngOnInit() {
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
    let debitUserBonus : any = {
      userId : JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH)))),
      bonusOptionId : item.recycleBonusExchangeOptId
    };

    this.bonusService.updateDebitBonus(debitUserBonus).subscribe(
      success => {
        this.toastService.showSuccess("Requisição efetuada com sucesso");
        this.eventBonusUsage.publish('user:bonus', "");
      },

      err => this.toastService.showError(err.message)
    )
  }

}
