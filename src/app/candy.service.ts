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
    if(num < 0.12) return 0;  //probability 0.12
    else if(num < 0.24) return 1; // probability 0.12
    else if(num < 0.36) return 2; //probability 0.12
    else if(num < 0.46) return 3; //probability 0.10
    else if(num < 0.56) return 4; //probability 0.10
    else if(num < 0.66) return 5; //probability 0.10
    else if(num < 0.73) return 6; //probability 0.07
    else if(num < 0.80) return 7; //probability 0.07
    else if(num < 0.87) return 8; //probability 0.07
    else if(num < 0.92) return 9; //probability 0.05
    else if(num < 0.97) return 10; //probability 0.05
    else return 11;  //probability 0.03
  }


  addCandy(candy, array) { // Ajoute un bonbon dans un tableau vide.
    if (candy) {
        array.push(candy);
    }
    return array;
  }

  numero;

  scroll(bonbon){
    this.numero = bonbon;
    return this.numero;
  }
  
  
  getCoordoneeApi(long,lat): Observable<any>  {
    this.url= "https://api-adresse.data.gouv.fr/reverse/?lon="+long+"&lat="+lat;
    return this.http.get(this.url);
  }

  quizzList : object = [
    {
        text : "Les « fortune cookies » ne sont pas chinois.",
        goodAnswer : "vrai",
        answer : "VRAI. Les « fortune cookies » ne sont pas chinois. Ils sont probablement apparus dans la région de San Francisco au début du 20e siècle."
    },
    {
        text : "Un des plus grands pâtissiers et chefs de l’histoire s’appelait Carême.",
        goodAnswer : "vrai",
        answer : "VRAI. Né en 1784 à Paris et mort en 1833, le pâtissier et chef Antonin Carême est considéré par certains historiens comme le premier grand chef pâtissier des temps modernes."
    },
    {
        text : "Les gaufres de Liège et de Bruxelles sont identiques.",
        goodAnswer : "faux",
        answer : "FAUX. La gaufre de Liège est une gaufre épaisse au sucre qui, habituellement, ne présente pas de coins. Quant à la gaufre de Bruxelles, elle est rectangulaire et plus grande que sa cousine liégeoise."
    },
    {
        text : "La tarte aux pommes est une création américaine du début de la colonie.",
        goodAnswer : "faux",
        answer : "FAUX. Même si la tarte aux pommes est un mets typique des États-Unis, elle était savourée en Europe bien avant la découverte du Nouveau Monde."
    },
    {
        text : "Le mot « dessert » vient du verbe « desservir ».",
        goodAnswer : "vrai",
        answer : "VRAI. Le mot « dessert » vient du verbe « desservir », par référence au fait que le dessert était servi après que la table ait été débarrassée des autres plats."
    },
    {
        text : "L’inventeur de la barbe à papa était dentiste.",
        goodAnswer : "vrai",
        answer : "VRAI. Le dentiste William James Morrison est l’inventeur de la barbe à papa. Il a aussi été le président de l’Association dentaire du Tennessee en 1894."
    },
    {
        text : "Le Brésil est le plus grand producteur de fèves de cacao.",
        goodAnswer : "faux",
        answer : "FAUX. C’est la Côte d’Ivoire qui est le plus grand producteur de fèves de cacao avec environ 35 % de la production mondiale."
    },
    {
        text : "Le nom de la pâte filo vient du grec phyllon qui veut dire « remplir ».",
        goodAnswer : "faux",
        answer : "FAUX. Le nom de la pâte filo, aussi orthographié phyllo, vient du grec phyllon qui signifie « feuille »."
    },
    {
        text : "Le sorbet est un mélange de purée de fruit et de lait écrémé.",
        goodAnswer : "faux",
        answer : "FAUX. Les sorbets ne contiennent ni lait, ni crème, ni œuf. Ce sont des glaces à l’eau fabriquées à partir de jus de fruits, d’eau, de sucre et parfois parfumées d’une liqueur."
    },
    {
        text : "Le nougat nous vient d’Allemagne et d’Autriche.",
        goodAnswer : "faux",
        answer : "FAUX. Le nougat est une confiserie typique des pays du bassin méditerranéen."
    },
    {
        text : "Le miel peut se conserver plus de 1000 ans.",
        goodAnswer : "vrai",
        answer : "VRAI. Le miel est un produit non périssable qui peut rester intact pendant plus de 1000 ans."
    },
    {
        text : "Le point de fusion du chocolat est légèrement inférieur à la température du corps humain.",
        goodAnswer : "vrai",
        answer : "VRAI. Le point de fusion du chocolat est légèrement inférieur à la température du corps humain. C’est la raison pour laquelle il fond si naturellement dans la bouche."
    }
]

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
        quantity : 0, 
        point: 50,
        img : 'https://image.ibb.co/nzNpnf/Candy12.png'}
  ]
  
}



