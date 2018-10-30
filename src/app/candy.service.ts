import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CandyService {

  constructor(private http: HttpClient) { }

  public url: string;

  candyArray = ["CrocoLicieux", "Chokobon", "CaraMou", "Arlequinn", "TagadaTsoinTsoin"];
  playerCandyArray = [];

  getRandom(){ // Génère une probabilté à appeler lors du clic sur la modale.
    var num=Math.random();
    if(num < 0.12) return 1;  //probability 0.35
    else if(num < 0.24) return 2; // probability 0.25
    else if(num < 0.36) return 3; //probability 0.20
    else if(num < 0.46) return 4; //probability 0.15
    else if(num < 0.56) return 5; //probability 0.15
    else if(num < 0.66) return 6; //probability 0.15
    else if(num < 0.73) return 7; //probability 0.15
    else if(num < 0.80) return 8; //probability 0.15
    else if(num < 0.87) return 9; //probability 0.15
    else if(num < 0.92) return 10; //probability 0.15
    else if(num < 0.97) return 11; //probability 0.15
    else return 12;  //probability 0.05
  }

//   generateCandy(array) { // Génère un bonbon aléatoire à partir d'un tableau prédéfini.
//     let randomCandy = this.getRandomInt(array.length);
//     return array[randomCandy];
// }

  addCandy(candy, array) { // Ajoute un bonbon dans un tableau vide.
    if (candy) {
        array.push(candy);
    }
    return array;
  }
  
  getCoordoneeApi(long,lat): Observable<any>  {
    this.url= "https://api-adresse.data.gouv.fr/reverse/?lon="+long+"&lat="+lat;
    return this.http.get(this.url);
  }

  
}

// Synthaxe pour ajouter un bonbon aléatoire dans le tableau playerCandyArray : addCandy(generateCandy(candyArray), playerCandyArray).

// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));

