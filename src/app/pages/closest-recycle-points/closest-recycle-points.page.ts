
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Local } from 'src/app/models/local';
import { UserInformation } from 'src/app/models/user-information';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecycleService } from 'src/app/services/recycle.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/utils/auth-constants';


declare var google: any;
@Component({
  selector: 'app-closest-recycle-points',
  templateUrl: './closest-recycle-points.page.html',
  styleUrls: ['./closest-recycle-points.page.scss'],
})
export class ClosestRecyclePointsPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  public user: UserInformation = new UserInformation();
  public userId: string;
  map: any;
  address: string;
  locals: Local[] = [];

  latitude: number;
  longitude: number;

  icon = {
    url: 'assets/icon/recycle-location.png', // image url
    scaledSize: new google.maps.Size(50, 50), // scaled size
  };

  iconUser = {
    url: 'assets/icon/user_marker.jpg',
    scaledSize: new google.maps.Size(50, 50), // scaled size
  }

  constructor(
    private authenticationService: AuthenticationService,
    private recycleService: RecycleService,
    private toastService: ToastService
  ) {
  }


  ngOnInit() {
    this.userId = JSON.parse(unescape(atob(localStorage.getItem(AuthConstants.AUTH))));
    this.authenticationService.getUserById(this.userId).subscribe((res) => {
      this.user = res;
    })
    this.getRecyclePoints();
  }

  getRecyclePoints() {
    this.recycleService.getClosestRecyclePoints(this.userId).subscribe(
      success => {
        this.locals = success;
        console.log('locais', this.locals )
        this.loadMap();
      },
      err => this.toastService.showError(err.message)
    )
  }

  addMarker(map: any, latitude: number, longitude: number, description: string, isUser: boolean) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: isUser ? this.iconUser : this.icon
    });

    let content = description;

    this.addInfoWindow(marker, content);
  }


  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }


  loadMap() {
    let latLngUser = new google.maps.LatLng(this.user.latitude, this.user.longitude);
    let mapOptions = {
      center: latLngUser,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(this.map, this.user.latitude, this.user.longitude, "Endereço Utilizador", true);

    this.locals.forEach(item => {
      this.addMarker(this.map, item.latitude, item.longitude, item.localDescription, false)
    })
  }
}