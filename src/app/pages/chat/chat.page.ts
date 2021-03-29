import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { UserInformation } from 'src/app/models/user-information';
import { ChatService } from 'src/app/services/chat.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { environment } from 'src/environments/environment';
import { Endpoints } from 'src/app/utils/api-endpoints';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public user: UserInformation = new UserInformation();
  public chat: Chat[] = [];
  public messageChat: string;

  imageURI: any;
  imageTitle: any;
  isImageSelected:boolean = false;
  files = [];

  constructor(
    private chatService: ChatService, 
    private toastService: ToastService, 
    private datePipe: DatePipe, 
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    private imagePicker: ImagePicker,
    private mediaCapture: MediaCapture,
    private file: File,
    private photoViewer: PhotoViewer,
    private actionSheetController: ActionSheetController,
    private plt: Platform) {
    this.user.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.user.userName = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH_NAME))));
    console.log(this.user.userId)
    this.getUserChat()

  }
  ngOnInit(): void {
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


  chooseFile() {
    let options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      saveToPhotoAlbum: false
    };
 
 
    this.camera.getPicture(options).then((img) => {
      this.imageURI = img;
      this.isImageSelected =true;
    }).catch((reason) => {
      console.log(reason);
    });
  }
 
  async doImageUpload(imagePath: string) {
    let loader = this.loadingCtrl.create({
      cssClass: "my-custom-loader-class",
      message: "Uploading ...",
      backdropDismiss: true
    });
    (await loader).present();
    let filename = imagePath.split('/').pop();
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: { 'title': this.imageTitle }
    };
    const url = environment.apiUrl + Endpoints.updloadPhotoChat;
    fileTransfer.upload(imagePath, url,options).then((res)=>{
      this.toastService.showSuccess("Imagem enviada com sucesso");
    },(err)=>{
    });
 
  } 

  async selectMedia() {
    const actionSheet = await this.actionSheetController.create({
      header: 'What would you like to add?',
      buttons: [
        {
          text: 'Capture Image',
          handler: () => {
            this.captureImage();
          }
        },
        {
          text: 'Load multiple',
          handler: () => {
            this.pickImages();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  pickImages() {
    this.imagePicker.getPictures({}).then(
      async results => {
        for (var i = 0; i < results.length; i++) {
          await this.doImageUpload(results[i])
          // this.copyFileToLocalDir(results[i]);
        }
      }
    );
 
    // If you get problems on Android, try to ask for Permission first
    // this.imagePicker.requestReadPermission().then(result => {
    //   console.log('requestReadPermission: ', result);
    //   this.selectMultiple();
    // });
  }
 
  captureImage() {
    this.mediaCapture.captureImage().then(
      async (data: MediaFile[]) => {
        if (data.length > 0) {
          await this.doImageUpload(data[0].fullPath)
          // this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }
}

