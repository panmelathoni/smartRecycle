import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rgpd',
  templateUrl: './rgpd.page.html',
  styleUrls: ['./rgpd.page.scss'],
})
export class RgpdPage implements OnInit {
public accepted : false;
public denied : false;


  constructor(private router: Router) { }

  ngOnInit() {
  }

change(event, option) {
  
  if(option == 1) {
    this.accepted = event.target.checked
  }
  else {
    this.denied = event.target.checked
  }

}


  forward() {
    if(this.accepted){

      this.router.navigate(['signup-address']);
    }
    else {
      this.router.navigate(['login']);
      
    }
  }
}
