/* eslint-disable prettier/prettier */

type University = {
    name: string;
    image: string;
    Description: string;
    country: string;
}

export class UniversityDto {
    name: string;
    image: string;
    Description: string;
    country: string;
  
    constructor({name, image, Description, country}: University) {
      this.name = name;
      this.image = image;
      this.Description = Description;
      this.country = country;
    }
  
  
  }
  