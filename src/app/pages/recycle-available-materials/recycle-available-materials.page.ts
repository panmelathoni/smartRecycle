import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-recycle-available-materials',
  templateUrl: './recycle-available-materials.page.html',
  styleUrls: ['./recycle-available-materials.page.scss'],
})
export class RecycleAvailableMaterialsPage implements OnInit {
  public materials: any[] = [];
  public user: UserInformation = new UserInformation();
  public userId: string;
  constructor( 
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController,
    private recycleService: RecycleService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.authenticationService.getUserById(this.userId).subscribe((res) => {
      this.user = res;
    })

    this.getAvailableMaterials();
  }

  getAvailableMaterials() {
    this.recycleService.getAvailableMaterials(this.userId).subscribe(
      success => {
        this.materials = success;
      },
      err => this.toastService.showError(err.message)
    )
  }

  requestMaterial( item){
    item.requestCompanyId = this.userId;
    this.recycleService.requestAvailableMaterial(item).subscribe(
      success => {
        this.toastService.showSuccess("Material Requisitado com sucesso");
        this.getAvailableMaterials();
      },
      err => this.toastService.showError(err.message)
    )
  }
}
