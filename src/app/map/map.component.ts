import { Component, OnInit, Input } from '@angular/core';
import { CandyService } from '../candy.service';

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
  coordonnéeApi = [];
  bonbonNumber: number;

  randomPosArray() {
    for (let i = 0; i < 10; i++) {
      /*les valeurs de randomnumber sont les distances entre la géolocalisation, 
      et le pin d'un bonbon. cette fonction donne la position au pin,
      pour le moment pas de valeurs négatives, c'est à faire*/
      let randomNumber = parseFloat(((Math.random() * 20 + (-2)) / 1000).toFixed(6))*Math.cos(Math.random() * Math.PI ) ;
      let randomNumber2 = parseFloat(((Math.random() * 20 + 0) / 1000).toFixed(6))*Math.cos(Math.random() * Math.PI ) ;
      this.posArray.push({
      posArrayLng: parseFloat((this.myLng + randomNumber2).toFixed(6)),
      posArrayLat: parseFloat((this.myLat + randomNumber).toFixed(6))
    })}
    console.log(this.posArray);
  }

  constructor(private service: CandyService) {  }

  getCandy(){
    this.bonbonNumber=this.service.getRandom();
    console.log(this.bonbonNumber);
  }

  ngOnInit() {
    this.randomPosArray();

    this.service.getCoordoneeApi(this.posArray[1].posArrayLng, this.posArray[1].posArrayLat)
      .subscribe(data=>{
        this.coordonnéeApi = data});
    console.log(this.coordonnéeApi, this.posArray[1].posArrayLng, this.posArray[1].posArrayLat);
 
}
}
