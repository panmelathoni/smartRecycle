import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Address } from 'src/app/models/address';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-signup-address',
  templateUrl: './signup-address.page.html',
  styleUrls: ['./signup-address.page.scss'],
})
export class SignupAddressPage implements OnInit {

  submitted = false;
  public register: Address = new Address();
  public registerForm: FormGroup;



  constructor(private router: Router,
    private toastService: ToastService,
    private menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private googleService: GoogleApiService) { 
    }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.registerForm = this.formBuilder.group({
      street: ['', [Validators.required]],
      concelho: ['', [Validators.required]],
      freguesia: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
    },
    );
  }

  get f() { return this.registerForm.controls; }


  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.register.street = this.registerForm.controls['street'].value;
    this.register.city = this.registerForm.controls['concelho'].value;
    this.register.postalCode = this.registerForm.controls['postalCode'].value;
    this.register.country = this.registerForm.controls['country'].value;
    this.register.neighborhood = this.registerForm.controls['freguesia'].value;
    this.register.userId = await this.storageService.readFromStorage(AuthConstants.AUTH);
    // console.log(JSON.stringify(this.register))

    this.authenticationService.updateUserInformation(this.register).subscribe(
      (res: any) => {

        this.toastService.showMessage(res.message);
        if (res.status)
          this.router.navigate(['dashboard']);

      },
      (error: any) => {
        this.toastService.showMessage('Network Problem');
        console.log('Network Issue.', error);
      }
    );

  }

  getAddressFromGoogle() {
    var address = this.registerForm.controls['street'].value;
    this.googleService.getAddressGoogleApi(address).subscribe(
      (res: any) => {
        if (res.error) {
          this.toastService.showMessage('Endereço não encontrado');
          return;
        }
        this.register = res;
        console.log(this.register)
        this.fillFormAdress();
      },
      (error: any) => {
        this.toastService.showMessage('Network Problem');
        console.log('Network Issue.', error);
      }
    );
  }

  fillFormAdress() {
    this.registerForm.patchValue({
      street: this.register.street,
      concelho: this.register.city,
      freguesia: this.register.neighborhood,
      country: this.register.country,
    });
  }


}
