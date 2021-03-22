import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { UserInformation } from 'src/app/models/user-information';
import { ChatService } from 'src/app/services/chat.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public user: UserInformation = new UserInformation();
  public chat: Chat[] = [];
  public messageChat: string;


  constructor(private chatService: ChatService, private toastService: ToastService, private datePipe: DatePipe, private router: Router) {
    this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.user.userName = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH_NAME))));
    console.log(this.user.userId)
    this.getUserChat()

  }

  ngOnInit() {
    this.chat = this.chatService.getMockChat();
  }

  private getUserChat() {
    this.chatService.getChatHistoryByUser(this.user.userId).subscribe(
      success => {
        this.chat = success;
        this.chat.forEach(item => {
          if (item.isPhoto){
            item.message = "data:image/jpeg;base64,"+ item.base64Photo
          }
        })
      },
      err => this.toastService.showError(err.message)
    )
  }

  sendMessage() {
    let messageUser = new Chat();
    messageUser.userId = this.user.userId;
    messageUser.message = this.messageChat;
    messageUser.createdOn = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
    messageUser.createdBy = this.user.userName;

    this.chatService.createChat(messageUser).subscribe(
      success => {
        this.toastService.showInfo('Mensagem enviada com sucesso');
        this.getUserChat()
      },
      err => this.toastService.showError(err.message)
    );
  }
}

