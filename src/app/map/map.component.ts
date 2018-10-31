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
    visibleMarker=[true, true, true, true, true, true, true, true, true, true, true, true, true];


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
            let randomNumber = parseFloat(((Math.random() * 20 + (-2)) / 1000).toFixed(6)) * Math.cos(Math.random() * Math.PI);
            let randomNumber2 = parseFloat(((Math.random() * 20 + 0) / 1000).toFixed(6)) * Math.cos(Math.random() * Math.PI);
            this.posArray.push({
                posArrayLng: parseFloat((this.myLng + randomNumber2).toFixed(6)),
                posArrayLat: parseFloat((this.myLat + randomNumber).toFixed(6)),
                visible:true,
                infoWindowVisible:true
            })
        }
        console.log(this.posArray);
    }

    constructor(private service: CandyService) { }

    getCandy() {

        this.bonbonNumber = this.service.getRandom();
        console.log(this.bonbonNumber);
    }

    collectBonbon() {
        this.service.candyList[this.bonbonNumber]['quantity'] += this.service.candyList[this.bonbonNumber]['point'];
    }

    ngOnInit() {
        this.randomPosArray();

        this.service.getCoordoneeApi(this.posArray[1].posArrayLng, this.posArray[1].posArrayLat)
            .subscribe(data => {
                this.coordonnéeApi = data
            });
        console.log(this.coordonnéeApi, this.posArray[1].posArrayLng, this.posArray[1].posArrayLat);

    }


}
