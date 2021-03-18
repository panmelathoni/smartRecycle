import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Category } from 'src/app/models/category';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-recycle-categories',
  templateUrl: './recycle-categories.page.html',
  styleUrls: ['./recycle-categories.page.scss'],
})
export class RecycleCategoriesPage implements OnInit {
  public categories: Category[];
  public user : UserInformation = new UserInformation();
  constructor(private recycleService : RecycleService,
    private toastService: ToastService,
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController
    ) { 
    }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.authenticationService.getUserById(this.user.userId).subscribe((res) => {
        this.user = res;
    })
    this.getCategories();
  }

  /** Get all Categories*/
  public getCategories() {
    this.recycleService.getRecycleCategories().subscribe(
      (res: any) => {
        if (res) {
          this.categories = res;
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
}
