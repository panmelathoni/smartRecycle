import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { UserInformation } from 'src/app/models/user-information';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recycle-categories',
  templateUrl: './recycle-categories.page.html',
  styleUrls: ['./recycle-categories.page.scss'],
})
export class RecycleCategoriesPage implements OnInit {
  public categories: Category[];
  public user : UserInformation = new UserInformation();
  

  constructor(private recycleService : RecycleService,
    private toastService: ToastService
    ) { 
    }

  ngOnInit() {
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

  search(event){
    console.log(event);
    
  }
}
