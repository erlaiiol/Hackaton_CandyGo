import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CandyService {

  constructor(private http: HttpClient) { }

  public url: string;

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

  candyList : object[] = [
    { name : "Dragibeurk",
      quality : "Bonbon commun",
      description : "Le plus commun des bonbons communs, le cauchemar des parents, le rêve des dentistes !",
      quantity : 0, 
      point : 1,
      img : 'https://image.ibb.co/bZzzL0/Candy1A.png'},

      { name : "Candycrusher",
        quality : "Bonbon commun",
        description : "Véritable casseur de dents en série, la réputation du Candycrusher n'est plus à faire !",
        point : 1,
        quantity : 0, 
        img : 'https://image.ibb.co/jB5aSf/Candy4.png'},

      { name : "Ratella",
        quality : "Bonbon commun",
        description : "Ratella aurait pu gagner en prestige... si seulement il n'était pas aromatisé à la réglisse !",
        quantity : 0,
        point : 1,
        img : 'https://image.ibb.co/c4OjL0/Candy3.png' },

      { name : "Bofbof",
        quality : "Bonbon commun",
        description : "Les gens méchants mettent des raisins dans leurs muffins, d'autres y mettent des Bofbofs...",
        quantity : 0, 
        point : 3,
        img : 'https://image.ibb.co/mDzPL0/Candy2.png'},

      { name : "Pomme d'amer",
        quality : "Bonbon commun",
        description : "Un peu acide, un peu amer, la Pomme d'amer n'a décidément rien pour plaire.",
        quantity : 0, 
        point : 3,
        img : 'https://image.ibb.co/evUPL0/Candy5.png'},

      { name : "Berlingus",
        quality : "Bonbon rare",
        description : "C'est de lui dont nous parlaient nos parent lorsqu'ils étaient gamins : le Berlingus vous laissera des souvenirs impérissables",
        quantity : 0, 
        point : 3,
        img : 'https://image.ibb.co/iSALtL/Candy7.png'}, 

      { name : "Gonegone",
        quality : "Bonbon rare",
        description : "De son petit surnom le \"bonbec des gones\", il est aussi savoureux qu'une rosette fraichement tranchée.",
        quantity : 0, 
        point : 5,
        img : 'https://image.ibb.co/ewGh7f/Candy6.png'},

      { name : "Chocodude",
        quality : "Bonbon rare",
        description : "Le Chocodude n'a jamais réussi à être accepté par ses camarades bonbons. C'est peut-être parce que c'est une barre de chocolat...",
        quantity : 0,
        point : 5, 
        img : 'https://image.ibb.co/eUkmYL/Candy8.png'},

      { name : "Coolcake",
        quality : "Bonbon rare",
        description : "Quand y'en a marre, y a Coolcake !",
        quantity : 0,
        point : 5, 
        img : 'https://image.ibb.co/k91RYL/Candy9.png'},

      { name : "Boulmagik",
        quality : "Bonbon épique",
        description : "Lorsqu'on parle de Serious Candiness, on évoque plus qu'à demi-mot la Boulmagik",
        quantity : 0, 
        point : 10,
        img : 'https://image.ibb.co/gBbtDL/Candy10.png'},

      { name : "Carambourre",
        quality : "Bonbon épique",
        description : "Véritable caviar parmi les innombrables douceurs accessibles à nos palais, le Carambourre est de ceux qu'on ne mange qu'une fois dans une vie.",
        quantity : 0,
        point : 10, 
        img : 'https://image.ibb.co/iFqaSf/Candy11.png'},

      { name : "Harib'oeil",
        quality : "Bonbon légendaire",
        description : "La légende raconte qu'un mythique bonbon n'attendrait qu'un dresseur de bonbons assez brave pour le croquer. Et de la bravoure, il en faut pour avaler ce que l'on croit être un oeil !",
        quantity : 50, 
        img : 'https://image.ibb.co/nzNpnf/Candy12.png'}
  ]
  
}

// Synthaxe pour ajouter un bonbon aléatoire dans le tableau playerCandyArray : addCandy(generateCandy(candyArray), playerCandyArray).

// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));

