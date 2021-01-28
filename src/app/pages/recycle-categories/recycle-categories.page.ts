import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Category } from 'src/app/models/category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recycle-categories',
  templateUrl: './recycle-categories.page.html',
  styleUrls: ['./recycle-categories.page.scss'],
})
export class RecycleCategoriesPage implements OnInit {
  public categories: Category[];

  constructor(private recycleService : RecycleService,
    private authenticationService: AuthenticationService,
    private toastService: ToastService,
    private menuCtrl: MenuController
    ) { 
    this.userIsLogged();
      
    }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.getCategories();
  }

  async userIsLogged() {
    var user = await this.authenticationService.userIsLogged();
    if (!user) {
      this.toastService.showMessage("user is not logged in");
      this.authenticationService.logout();
    } else {
      return;
    }
  }
/**getCategoriesMethod*/
  public getCategories() {

    this.recycleService.getRecycleCategories().subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.categories = res;
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
