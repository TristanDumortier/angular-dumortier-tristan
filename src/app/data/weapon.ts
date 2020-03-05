import { Serializable } from '../serializable';

export class Weapon extends Serializable  {
  id: string;
  name: string;
  attaque: number;
  esquive: number;
  pv: number; // Point de vie
  degats: number;
  nbPointsCarac: number;

  getWeaponName(): string {
    return 'Le nom de l\'arme est : ' + this.name;
  }
}
