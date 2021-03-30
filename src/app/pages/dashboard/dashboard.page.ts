import { UserInformation } from './../../models/user-information';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public user : UserInformation = new UserInformation();

  constructor(
    private authenticationService: AuthenticationService

  ) {
  }

  ngOnInit() {
    this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.authenticationService.getUserById(this.user.userId).subscribe((res) => {
        this.user = res;
    })
  }
}