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

  setRandomLngFromGeo(){
    console.log(this.myLng)
  }
  setRandomLatFromGeo(){
    this.randomLat=this.myLat+this.randomLatAdder();
    return this.randomLat;
  }

  randomLatAdder = () => { // Génère de façon aléatoire une latitude positive ou négative (définie entre -0.005 et 0.005).
    return Math.floor(Math.random() * 5 + 2) / 1000;
    };
    
  randomLonAdder = () => { // Génère de façon aléatoire une longitude positive ou négative (définie entre -0.008 et 0.008).
    return Math.floor(Math.random() * 8 + 2) / 1000;
    }; 
  

  constructor() { }
  ngOnInit() {
  }
  

}
