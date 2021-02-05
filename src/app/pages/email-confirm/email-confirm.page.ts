import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.page.html',
  styleUrls: ['./email-confirm.page.scss'],
})
export class EmailConfirmPage implements OnInit {

  public user : string = "Panmela";
  public email : string = "panmelathoni@gmail.com";

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate(['login']);
  }
}
