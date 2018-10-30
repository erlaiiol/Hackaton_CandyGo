import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CandyGo';
  myLng;
  myLat;
  enablePlayMode=false;
displayLocationInfo = (position) => {
  this.myLng = position.coords.longitude;
  this.myLat = position.coords.latitude;
  this.enablePlayMode=true;
}

ngOnInit() {
  if (navigator.geolocation) {
    this.enablePlayMode=false;
    navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
  }
}
}