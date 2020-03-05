import { Serializable } from '../serializable';

export class Hero extends Serializable  {
  id: string;
  name: string;
  attaque: number;
  esquive: number;
  pv: number; // Point de vie
  degats: number;
  nbPointsCarac: number; // 40 max

  getHeroName(): string {
    return 'Le nom du héro est : ' + this.name;
  }
}
