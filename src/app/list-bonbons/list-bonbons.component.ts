import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bonbons',
  templateUrl: './list-bonbons.component.html',
  styleUrls: ['./list-bonbons.component.css']
})
export class ListBonbonsComponent implements OnInit {

  candyList : object[] = [
    { name : "Bonbon 1",
      quality : "Bonbon commun",
      description : "Le plus commun des bonbons communs, le cauchemar des parents, le rêve des dentistes !",
      quantity : 0, 
      img : 'https://image.ibb.co/bZzzL0/Candy1A.png'},

      { name : "Bonbon 2",
        quality : "Bonbon commun",
        description : "Véritable casseur de dents en série, la réputation de Bonbon 2 n'est plus à faire !",
        quantity : 0, 
        img : 'https://image.ibb.co/mDzPL0/Candy2.png'},

      { name : "Bonbon 3",
        quality : "Bonbon commun",
        description : "Bonbon 3 aurait pu gagner en prestige... si seulement il n'était pas aromatisé à la réglisse !",
        quantity : 0,
        img : 'https://image.ibb.co/c4OjL0/Candy3.png' },

      { name : "Bonbon 4",
        quality : "Bonbon commun",
        description : "Les gens méchants mettent des raisins dans leurs muffins, d'autres y mettent des Bonbon 4...",
        quantity : 0, 
        img : 'https://image.ibb.co/jB5aSf/Candy4.png'},

      { name : "Bonbon 5",
        quality : "Bonbon commun",
        description : "Un peu acide, un peu amer, Bonbon 5 n'a décidément rien pour plaire.",
        quantity : 0, 
        img : 'https://image.ibb.co/evUPL0/Candy5.png'},

      { name : "Bonbon 6",
        quality : "Bonbon rare",
        description : "C'est de lui dont nous parlaient nos parent lorsqu'ils étaient gamins : Bonbon 8 vous laissera des souvenirs impérissables",
        quantity : 0, 
        img : 'https://image.ibb.co/ewGh7f/Candy6.png'},

      { name : "Bonbon 7",
        quality : "Bonbon rare",
        description : "De son petit surnom le \"bonbec des gones\", il est aussi savoureux qu'une rosette fraichement tranchée.",
        quantity : 0, 
        img : 'https://image.ibb.co/iSALtL/Candy7.png'},

      { name : "Bonbon 8",
        quality : "Bonbon rare",
        description : "Bonbon 8 n'a jamais réussi à être accepté par ses camarades bonbons. C'est peut-être ça qui l'a rendu aussi méchant...",
        quantity : 0, 
        img : 'https://image.ibb.co/eUkmYL/Candy8.png'},

      { name : "Bonbon 9",
        quality : "Bonbon rare",
        description : "Quand y'en a marre, y a Bonbon 9 !",
        quantity : 0, 
        img : 'https://image.ibb.co/k91RYL/Candy9.png'},

      { name : "Bonbon 10",
        quality : "Bonbon épique",
        description : "Lorsqu'on parle de Serious Candiness, on évoque plus qu'à demi-mot Bonbon 10",
        quantity : 0, 
        img : 'https://image.ibb.co/gBbtDL/Candy10.png'},

      { name : "Bonbon 11",
        quality : "Bonbon épique",
        description : "Véritable caviar parmi les innombrables douceurs accessibles à nos palais, Bonbon 11 est de ceux qu'on ne mange qu'une fois dans une vie.",
        quantity : 0, 
        img : 'https://image.ibb.co/iFqaSf/Candy11.png'},

      { name : "Bonbon 12",
        quality : "Bonbon légendaire",
        description : "La légendaire raconte qu'un légendaire bonbon n'attendrait qu'un dresseur de bonbons assez brave pour le croquer. Et de la bravoure, il en faut pour avaler ce que l'on croit être un oeil !",
        quantity : 0, 
        img : 'https://image.ibb.co/nzNpnf/Candy12.png'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
