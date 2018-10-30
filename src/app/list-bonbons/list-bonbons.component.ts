import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bonbons',
  templateUrl: './list-bonbons.component.html',
  styleUrls: ['./list-bonbons.component.css']
})
export class ListBonbonsComponent implements OnInit {

  candyList : object[] = [
    { name : "Dragibeurk",
      quality : "Bonbon commun",
      description : "Le plus commun des bonbons communs, le cauchemar des parents, le rêve des dentistes !",
      quantity : 0, 
      img : 'https://image.ibb.co/bZzzL0/Candy1A.png'},

      { name : "Candycrusher",
        quality : "Bonbon commun",
        description : "Véritable casseur de dents en série, la réputation du Candycrusher n'est plus à faire !",
        quantity : 0, 
        img : 'https://image.ibb.co/jB5aSf/Candy4.png'},

      { name : "Ratella",
        quality : "Bonbon commun",
        description : "Ratella aurait pu gagner en prestige... si seulement il n'était pas aromatisé à la réglisse !",
        quantity : 0,
        img : 'https://image.ibb.co/c4OjL0/Candy3.png' },

      { name : "Bofbof",
        quality : "Bonbon commun",
        description : "Les gens méchants mettent des raisins dans leurs muffins, d'autres y mettent des Bofbofs...",
        quantity : 0, 
        img : 'https://image.ibb.co/mDzPL0/Candy2.png'},

      { name : "Pomme d'amer",
        quality : "Bonbon commun",
        description : "Un peu acide, un peu amer, la Pomme d'amer n'a décidément rien pour plaire.",
        quantity : 0, 
        img : 'https://image.ibb.co/evUPL0/Candy5.png'},

      { name : "Berlingus",
        quality : "Bonbon rare",
        description : "C'est de lui dont nous parlaient nos parent lorsqu'ils étaient gamins : le Berlingus vous laissera des souvenirs impérissables",
        quantity : 0, 
        img : 'https://image.ibb.co/iSALtL/Candy7.png'}, 

      { name : "Gonegone",
        quality : "Bonbon rare",
        description : "De son petit surnom le \"bonbec des gones\", il est aussi savoureux qu'une rosette fraichement tranchée.",
        quantity : 0, 
        img : 'https://image.ibb.co/ewGh7f/Candy6.png'},

      { name : "Chocodude",
        quality : "Bonbon rare",
        description : "Le Chocodude n'a jamais réussi à être accepté par ses camarades bonbons. C'est peut-être parce que c'est une barre de chocolat...",
        quantity : 0, 
        img : 'https://image.ibb.co/eUkmYL/Candy8.png'},

      { name : "Coolcake",
        quality : "Bonbon rare",
        description : "Quand y'en a marre, y a Coolcake !",
        quantity : 0, 
        img : 'https://image.ibb.co/k91RYL/Candy9.png'},

      { name : "Boulmagik",
        quality : "Bonbon épique",
        description : "Lorsqu'on parle de Serious Candiness, on évoque plus qu'à demi-mot la Boulmagik",
        quantity : 0, 
        img : 'https://image.ibb.co/gBbtDL/Candy10.png'},

      { name : "Carambourre",
        quality : "Bonbon épique",
        description : "Véritable caviar parmi les innombrables douceurs accessibles à nos palais, le Carambourre est de ceux qu'on ne mange qu'une fois dans une vie.",
        quantity : 0, 
        img : 'https://image.ibb.co/iFqaSf/Candy11.png'},

      { name : "Harib'oeil",
        quality : "Bonbon légendaire",
        description : "La légendaire raconte qu'un légendaire bonbon n'attendrait qu'un dresseur de bonbons assez brave pour le croquer. Et de la bravoure, il en faut pour avaler ce que l'on croit être un oeil !",
        quantity : 0, 
        img : 'https://image.ibb.co/nzNpnf/Candy12.png'}
  ]

  getColor(quality) { 
    switch (quality) {
      case 'Bonbon commun':
        return 'white';
      case 'Bonbon rare':
        return 'blue';
      case 'Bonbon épique':
        return 'purple';
      case 'Bonbon légendaire':
        return 'orange';
        
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
