import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() myLng;
  @Input() myLat;


  randomLng;
  randomLat;
  posArray = [];
  randomPosArray() {
    for (let i = 0; i < 10; i++) {
      let randomNumber = parseFloat(((Math.random() * 20 + (-2)) / 1000).toFixed(6));
      this.posArray.push({
      posArrayLng: parseFloat((this.myLng + randomNumber).toFixed(6)),
      posArrayLat: parseFloat((this.myLat + randomNumber).toFixed(6))
    })}
    console.log(this.posArray);
  }
  

  constructor() { }
  ngOnInit() {
    this.randomPosArray();

  }


}
