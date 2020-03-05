import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Weapon } from '../data/weapon';
import { WeaponService } from '../service/weapon.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {
  weapon: Weapon;

  constructor(
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private location: Location
  ) {}

  ngOnInit() {
    // On récupère les infos de notre héro
    this.getHero();
  }

  // Permet de retourner sur une page en arrière
  goBack(): void {
    this.location.back();
  }

  // Appel de notre service pour récuperer les infos de notre arme
  getHero(): void {
    // On récupère l'id qui est en GET dans l'url
    const id = this.route.snapshot.paramMap.get('id');
    this.weaponService.getWeapon(id)
      .subscribe(weapon => this.weapon = weapon);
  }

  // Retourne le nombre de points qu'il reste à distribuer pour l'arme
  getNbPointsWeapons() {
    let base = 0;
    // On additionne toutes les valeurs entre elles (elles peuvent être négatives) et on soustrait ces valeurs à notre base de 0
    let total = base - (this.weapon.attaque + this.weapon.degats + this.weapon.esquive + this.weapon.pv);
    return total;
  }

}
