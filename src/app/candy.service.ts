import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandyService {

  constructor() { }

  candyArray = ["CrocoLicieux", "Chokobon", "CaraMou", "Arlequinn", "TagadaTsoinTsoin"];
  playerCandyArray = [];

  getRandomInt(max) { // Génère un nombre aléatoire (défini entre 0 et le nombre passé en argument).
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateCandy(array) { // Génère un bonbon aléatoire à partir d'un tableau prédéfini.
    let randomCandy = this.getRandomInt(array.length);
    return array[randomCandy];
}

  addCandy(candy, array) { // Ajoute un bonbon dans un tableau vide.
    if (candy) {
        array.push(candy);
    }
    return array;
}

// Synthaxe pour ajouter un bonbon aléatoire dans le tableau playerCandyArray : addCandy(generateCandy(candyArray), playerCandyArray).

// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
// console.log(this.addCandy(this.generateCandy(this.candyArray), this.playerCandyArray));
}
