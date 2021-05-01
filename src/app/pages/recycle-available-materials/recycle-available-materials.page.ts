import { Component, OnInit } from '@angular/core';
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
  public userId: string;
  constructor( 
    private recycleService: RecycleService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    console.log('user id material', this.userId)
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

  confirmTakeOut(item){
    item.requestCompanyId = this.userId;
    console.log('confirmar retirada de material', item)

    this.recycleService.confirmTakeOutMaterial(item.recycleHistoryId).subscribe(
      success => {
        this.toastService.showSuccess("Confirmação de Retirada feita com sucesso");
        this.getAvailableMaterials();
      },
      err => this.toastService.showError(err.message)
    )
  }
}
