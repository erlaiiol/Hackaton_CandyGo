import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regles-jeu',
  templateUrl: './regles-jeu.component.html',
  styleUrls: ['./regles-jeu.component.css']
})
export class ReglesJeuComponent implements OnInit {
  rules : boolean = false;
  constructor() { }

  ngOnInit() {
  }
handleClick() {
  this.rules = !this.rules;
  console.log("bonjour")
}
}
