import { Category } from './../../models/category';
import { Material } from './../../models/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserInformation } from 'src/app/models/user-information';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-recycle-category-materials',
  templateUrl: './recycle-category-materials.page.html',
  styleUrls: ['./recycle-category-materials.page.scss'],
})
export class RecycleCategoryMaterialsPage implements OnInit {
  public materials : Material[] = [];
  public user : UserInformation = new UserInformation();
  public category : Category = new Category();
  constructor(private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController,
    private recycleService : RecycleService) { }

    ngOnInit() {
      this.menuCtrl.enable(true);
      this.activatedRoute.paramMap.subscribe(paramMap => {
        const recycleCategoryId = paramMap.get('recycleCategoryId');
        this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
        this.authenticationService.getUserById(this.user.userId).subscribe((res) => {
            this.user = res;
        })
        this.getCategoryById(recycleCategoryId);
        this.getMaterialsByCategoryId(recycleCategoryId);
      });
    }
  
    /** Get all materials from given category id*/
    public getMaterialsByCategoryId(recycleCategoryId) {
      this.recycleService.getMaterialByCategory(recycleCategoryId).subscribe(
        (res: any) => {
          if (res) {
            this.materials = res;
          } else {
            this.toastService.showMessage('No User data available');
          }
        },
        (error: any) => {
          this.toastService.showMessage('Network Problem');
          console.log('Network Issue.', error);
        }
      );
    }

    /** Get category given category id*/
    public getCategoryById(recycleCategoryId) {
      this.recycleService.getCategorylById(recycleCategoryId).subscribe(
        (res: any) => {
          if (res) {
            this.category = res;
          } else {
            this.toastService.showMessage('No User data available');
          }
        },
        (error: any) => {
          this.toastService.showMessage('Network Problem');
          console.log('Network Issue.', error);
        }
      );
    }
}
