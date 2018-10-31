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
    candyList = this.service.candyList;
    quizzList = this.service.quizzList;
    infoWindowVisible = false;
    pickUpButtonVisible = false;
    lost = false;
    score: number;


    styles =

        [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": 0.01
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -31
                    },
                    {
                        "lightness": -33
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.8
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 30
                    },
                    {
                        "saturation": 30
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 20
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 10
                    },
                    {
                        "saturation": -30
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 25
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": -20
                    }
                ]
            }
        ];

    icon = {
        url: '../assets/images/pumpkinSmall.png',
    }

    randomPosArray() {
        for (let i = 0; i < 10; i++) {
            /*les valeurs de randomnumber sont les distances entre la géolocalisation, 
            et le pin d'un bonbon. cette fonction donne la position au pin.*/
            this.score = 0;
            let randomNumber = parseFloat(((Math.random() * 20 + (-2)) / 1000).toFixed(6)) * Math.cos(Math.random() * Math.PI);
            let randomNumber2 = parseFloat(((Math.random() * 20 + 0) / 1000).toFixed(6)) * Math.cos(Math.random() * Math.PI);
            this.posArray.push({
                posArrayLng: parseFloat((this.myLng + randomNumber2).toFixed(6)),
                posArrayLat: parseFloat((this.myLat + randomNumber).toFixed(6)),
                visible: true
            })
        }
    }

    constructor(private service: CandyService) { }

    getCandy() {

        this.bonbonNumber = this.service.getRandom();
    }

    collectBonbon() {
        this.score += this.service.candyList[this.bonbonNumber]['point'];
        this.service.candyList[this.bonbonNumber]['quantity']+=1;
        this.service.scroll(this.bonbonNumber);
    }

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

    checkAnswerTrue() {
        if (this.quizzList[this.bonbonNumber].goodAnswer === "vrai") {
            return this.pickUpButtonVisible = true;
        }
        else {
            return this.lost = true;
        }
    }
    checkAnswerFalse() {
        if (this.quizzList[this.bonbonNumber].goodAnswer === "faux") {
            return this.pickUpButtonVisible = true;
        }
        else {
            return this.lost = true;
        }
    }

    ngOnInit() {
        this.randomPosArray();

    }


}
