import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Register } from 'src/app/models/register';
import { ToastService } from 'src/app/services/toast.service';
import { MustMatch } from 'src/app/utils/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  submitted = false;
  public register: Register = new Register();
  public registerForm: FormGroup;

  constructor(private router: Router,
    private toastService: ToastService,
    private menuCtrl: MenuController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    }
      , {
        validators: MustMatch('password', 'confirmPassword')
      }
    );
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.register.userName = this.registerForm.controls['userName'].value;
    this.register.name = this.registerForm.controls['userName'].value;
    this.register.email = this.registerForm.controls['email'].value;
    this.register.password = this.registerForm.controls['password'].value;
    this.register.confirmPassword = this.registerForm.controls['confirmPassword'].value;
    this.register.isCompany = false;
    this.register.isGovernment = false;


    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register))
  }
}


