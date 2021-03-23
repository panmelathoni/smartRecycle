import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { UserInformation } from 'src/app/models/user-information';
import { ChatService } from 'src/app/services/chat.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
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

const MEDIA_FOLDER_NAME = 'my_media';

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

  ngOnInit() {
    this.chat = this.chatService.getMockChat();
    this.plt.ready().then(() => {
      let path = this.file.dataDirectory;
      if (this.file){
        this.file.checkDir(path, MEDIA_FOLDER_NAME).then(
          () => {
            this.loadFiles();
          },
          err => {
            this.file.createDir(path, MEDIA_FOLDER_NAME, false);
          }
        );
      }
    });
  }

  loadFiles() {
    this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
      res => {
        this.files = res;
      },
      err => console.log('error loading files: ', err)
    );
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
 
  async doImageUpload() {
    let loader = this.loadingCtrl.create({
      cssClass: "my-custom-loader-class",
      message: "Uploading ...",
      backdropDismiss: true
    });
    (await loader).present();
    let filename = this.imageURI.split('/').pop();
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: { 'title': this.imageTitle }
    };
 
    fileTransfer.upload(this.imageURI, "http://localhost/api/upload",options).then((res)=>{
 
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
      results => {
        for (var i = 0; i < results.length; i++) {
          this.copyFileToLocalDir(results[i]);
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
      (data: MediaFile[]) => {
        if (data.length > 0) {
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }

  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
 
    const ext = myPath.split('.').pop();
    const d = Date.now();
    const newName = `${d}.${ext}`;
 
    const name = myPath.substr(myPath.lastIndexOf('/') + 1);
    const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
    const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
 
    this.file.copyFile(copyFrom, name, copyTo, newName).then(
      success => {
        this.loadFiles();
      },
      error => {
        console.log('error: ', error);
      }
    );
  }


}

