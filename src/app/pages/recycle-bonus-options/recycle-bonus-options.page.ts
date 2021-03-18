import { BonusService } from './../../services/bonus.service';
import { Component, OnInit } from '@angular/core';
import { Bonus } from 'src/app/models/bonus';
import { ToastService } from 'src/app/services/toast.service';

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
    event.preventDefault();
    event.stopPropagation();
    console.log('TODO : implement bonus usage', item);
  }

}
