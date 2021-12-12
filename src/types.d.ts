import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface TeamMember {
  name: string;
  title: string;
  favoriteBusiness: string;
  bio?: string;
  favoriteFoods?: string;
  img: string;
  alt: string;
}
