import { Component, OnInit } from '@angular/core';
import { UpdatePassword } from 'src/app/models/update-password';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  public user : UserInformation = new UserInformation();
  public userId: string;
  public updatePassword: UpdatePassword = new UpdatePassword()
  public oldpass: string;
  public changePass: boolean = false;
  public userPassword = {
    name: '',
    oldpassword: '',
    newpassword: ''
  };

  constructor( private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));

    this.authenticationService.getUserById(this.userId).subscribe((res) => {
        this.user = res;
    })
  }

  changePassState()
  {
    this.userPassword.name = this.user.userName;
    this.userPassword.oldpassword = '';
    this.userPassword.newpassword = '';
    this.changePass = !this.changePass;
  }

  validateInputs() {
    let name = this.userPassword.name.trim();
    let oldpassword = this.userPassword.oldpassword.trim();
    let newpassword = this.userPassword.newpassword.trim();
    return (
      this.userPassword.name &&
      this.userPassword.oldpassword &&
      this.userPassword.newpassword &&
      name.length > 0 &&
      oldpassword.length > 0 &&
      newpassword.length > 0
    );
  }

  checkPassword() {
    this.oldpass = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH_PASS))));
    return (this.userPassword.oldpassword === this.oldpass);
  }

  changePassword() {
    if (!this.checkPassword()) {
      this.toastService.showInfo('Palavra chave antiga incorreta');
      return;
    }

    if (this.validateInputs()) {
      this.updatePassword.password = this.userPassword.oldpassword;
      this.updatePassword.newPassword = this.userPassword.newpassword;
      this.updatePassword.userName = this.userPassword.name;
      this.authenticationService.updatePassword(this.updatePassword).subscribe(
        (res: any) => {
            this.storageService.saveStorage(AuthConstants.AUTH_PASS, this.updatePassword.password);
            this.storageService.saveStorage(AuthConstants.AUTH_NAME, this.updatePassword.userName);
            this.toastService.showSuccess('Palavra chave alterada com sucesso');
            this.changePassState();
        },
        (error: any) => {
          this.toastService.showError('Erro ao alterar palavra chave');
          console.log('Network Issue.');
        }
      );
    } else {
      this.toastService.showInfo('Please enter email/username or password.');
    }
  }

}
