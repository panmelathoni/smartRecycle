import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { Events } from 'src/app/utils/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  public user: UserInformation = new UserInformation();
  @Input() displayMenu: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    private menuCtrl: MenuController,
    private eventBonusUsage: Events) {
    this.eventBonusUsage.subscribe('user:bonus', () => {
      this.authenticationService.getUserById(this.user.userId).subscribe((res) => {
        this.user = res;
      })
    });

  }

  ngOnInit() {
    this.menuCtrl.enable(this.displayMenu);
    this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.authenticationService.getUserById(this.user.userId).subscribe((res) => {
      this.user = res;
    })
  }

}
