import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Address } from 'src/app/models/address';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { ToastService } from 'src/app/services/toast.service';

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
    private authenticationService: AuthenticationService,
    private googleService: GoogleApiService) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.registerForm = this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      // state: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      country: ['', [Validators.required]],

    }, 
    );
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.register.street = this.registerForm.controls['street'].value;
    this.register.city = this.registerForm.controls['city'].value;
    this.register.postalCode = this.registerForm.controls['postalCode'].value;
    this.register.country = this.registerForm.controls['country'].value;
    
    console.log(JSON.stringify(this.register))

    // this.authenticationService.register(this.register).subscribe(
    //   (res: any) => {
          
    //       this.toastService.showMessage(res.message);
    //       if (res.status) 
    //         this.router.navigate(['welcome']);
        
    //   },
    //   (error: any) => {
    //     this.toastService.showMessage('Network Problem');
    //     console.log('Network Issue.', error);
    //   }
    // );
    
  }

  getAddressFromGoogle(event) {

var address = this.registerForm.controls['street'].value;
    this.googleService.getAddressGoogleApi(address).subscribe(
      (res: any) => {
          
          console.log(res)
      },
      (error: any) => {
        this.toastService.showMessage('Network Problem');
        console.log('Network Issue.', error);
      }
    );
  }


}
