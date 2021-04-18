import { Category } from './../../models/category';
import { Material } from './../../models/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserInformation } from 'src/app/models/user-information';

@Component({
  selector: 'app-recycle-category-materials',
  templateUrl: './recycle-category-materials.page.html',
  styleUrls: ['./recycle-category-materials.page.scss'],
})
export class RecycleCategoryMaterialsPage implements OnInit {
  public materials: Material[] = [];
  public filteredMaterials: Material[] = [];
  public user: UserInformation = new UserInformation();
  public category: Category = new Category();
  constructor(private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private recycleService: RecycleService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recycleCategoryId = paramMap.get('recycleCategoryId');
      if (parseInt(recycleCategoryId) == 0) {
        this.getAllMaterials();
      }
      else {
        this.getCategoryById(recycleCategoryId);
        this.getMaterialsByCategoryId(recycleCategoryId);
      }
    });
  }

  /** Get all materials from given category id*/
  public getMaterialsByCategoryId(recycleCategoryId) {
    this.recycleService.getMaterialByCategory(recycleCategoryId).subscribe(
      (res: any) => {
        if (res) {
          this.materials = res;
          this.filteredMaterials = res;
        } else {
          this.toastService.showInfo('No Material data available');
        }
      },
      (error: any) => {
        this.toastService.showError('Network Problem');
        console.log('Network Issue.', error);
      }
    );
  }

  /** Get all materials from given category id*/
  public getAllMaterials() {
    this.recycleService.getAllMaterials().subscribe(
      (res: any) => {
        if (res) {
          this.materials = res;
          this.filteredMaterials = res;
        } else {
          this.toastService.showInfo('No Material data available');
        }
      },
      (error: any) => {
        this.toastService.showError('Network Problem');
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
          this.toastService.showInfo('No Caterogy data available');
        }
      },
      (error: any) => {
        this.toastService.showError('Network Problem');
        console.log('Network Issue.', error);
      }
    );
  }

  search(event) {
    if (event.detail.value !== "") {
      this.materials = this.filteredMaterials.filter(item => item.materialDescription.toLowerCase().includes(event.detail.value.toLowerCase()));
    }
    else{
      this.materials = this.filteredMaterials;
    }
  }
}
