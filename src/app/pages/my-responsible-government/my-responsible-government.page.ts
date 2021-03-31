import { Component, OnInit } from '@angular/core';
import { UpdatePassword } from 'src/app/models/update-password';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-my-responsible-government',
  templateUrl: './my-responsible-government.page.html',
  styleUrls: ['./my-responsible-government.page.scss'],
})
export class MyResponsibleGovernmentPage implements OnInit {
  public user: UserInformation = new UserInformation();
  public governmentResponsible: UserInformation = new UserInformation();
  public userId: string;
  constructor(private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));

    this.authenticationService.getUserById(this.userId).subscribe((res) => {
      this.user = res;
      console.log('user government', this.user)
      this.authenticationService.getUserById(this.user.governmentResponsibleId).subscribe((government) => {
        this.governmentResponsible = government;
        console.log('government responsible', this.governmentResponsible)
      })
    })
  }

}
