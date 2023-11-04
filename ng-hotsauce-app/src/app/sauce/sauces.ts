export class Sauces {
    id: number;
    name: string;
    spicyness: number;
    description: string;
    brand: string;
    country: string;
    picture: string;
  
    constructor(
        name: string = 'Entrer un nom...',
        spicyness: number = 0,
        description: string = 'Entrer une description...',
        picture: string = 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
        brand: string = 'Entrer une marque...',
        country: string = 'Entrer un pays...'
    ) {
        this.name = name;
        this.spicyness = spicyness;
        this.description = description;
        this.picture = picture;
        this.country = country;
        this.brand = brand;
    }
  }