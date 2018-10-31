import { Component, OnInit } from '@angular/core';
import { CandyService } from '../candy.service';

@Component({
  selector: 'app-list-bonbons',
  templateUrl: './list-bonbons.component.html',
  styleUrls: ['./list-bonbons.component.css']
})
export class ListBonbonsComponent implements OnInit {



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

  constructor(private service: CandyService) { }

  candyList = this.service.candyList;

  ngOnInit() {
  }

}
