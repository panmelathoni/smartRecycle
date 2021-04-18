import { Material } from './../../models/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recycle } from 'src/app/models/recycle';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-confirm-recycle',
  templateUrl: './confirm-recycle.page.html',
  styleUrls: ['./confirm-recycle.page.scss'],
})
export class ConfirmRecyclePage implements OnInit {
  public material: Material = new Material();
  public materialForm: FormGroup;
  public materialSuccess: boolean = false;
  public recycleMaterialId: number;
  constructor(private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private recycleService: RecycleService,
    public formBuilder: FormBuilder,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.recycleMaterialId =parseInt(paramMap.get('recycleMaterialId'));
      this.getMaterialById(this.recycleMaterialId);
    });
    this.materialForm = this.formBuilder.group({
      materialQuantity: [0, [Validators.required]]
    });
  }

  /** Get category given category id*/
  public getMaterialById(recycleMaterialId) {
    this.recycleService.getMaterialById(recycleMaterialId).subscribe(
      (res: any) => {
        if (res) {
          this.material = res.length > 0 ? res[0] : new Material();
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

  confirmMaterialRecycle()
  {
    let materialQuantity = this.materialForm.get('materialQuantity').value;
    if (materialQuantity == 0)
    {
      this.toastService.showError("Quantitade de Material deve ser superior a 0")
    }
    else{
      let recycle = new Recycle();
      recycle.materialName = this.material.materialName;
      recycle.materialEstimatedQuantity = materialQuantity
      recycle.recycleMaterialId = this.recycleMaterialId;
      recycle.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));;
      recycle.userName = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH_NAME))));;
      recycle.bonusEarned = 0;
      recycle.createdOn = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
      recycle.createdBy = recycle.userName;

      this.recycleService.createRecycleHistory(recycle).subscribe(
        success => {
          this.toastService.showSuccess("Reciclagem efetuada com sucesso")
          this.materialSuccess = true;
        },
        err => this.toastService.showError("Erro ao efetuar reciclagem")
      )
    }
  }

}
