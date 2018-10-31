import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Candy City';
  myLng;
  myLat;

  
  enablePlayMode=false;
  displayLocationInfo = (position) => {
    this.myLng = position.coords.longitude;
    this.myLat = position.coords.latitude;
    this.enablePlayMode=true;
    this.myLng.toFixed(6);
    this.myLat.toFixed(6);
}


ngOnInit() {
  if (navigator.geolocation) {
    this.enablePlayMode=false;
    navigator.geolocation.getCurrentPosition(this.displayLocationInfo.bind(this));
  }
}
}