import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  get f() { return this.registerForm.controls; };
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
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}


