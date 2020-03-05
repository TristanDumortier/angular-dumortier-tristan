import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import { Weapon } from '../data/weapon';
import { MessageService } from './message.service';

import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeaponService {

  private static url = 'weapons';

  // Constructeur
  constructor(private messageService: MessageService, private db: AngularFirestore) { }

  // Getteur permettant la récupération des héros
  getWeapons(): Observable<Weapon[]> {
    // Appel de la collection weapons sur firebase
    return this.db.collection<Weapon>(WeaponService.url)
      .snapshotChanges()
      .pipe(
        map(liste => {
          // Traitement de la liste
          return liste.map(item => {

            // On récupère les données de notre document weapon
            const data = item.payload.doc.data();

            // Création d'un objet Weapon à partir du JSON
            const weapon = new Weapon().fromJSON(data);

            // On récupère l'ID du document
            const id = item.payload.doc.id;
            // On ajoute l'ID à l'arme
            weapon.id = id;

            // Log de l'id de notre arme
            console.log('weapon ' + id);

            // Use spread operator to add the id to the document data
            return weapon;
          });
        })
      );
  }

  // Get permettant la Récupération d'une arme en fonction de son id
  getWeapon(id: string): Observable<Weapon> {
    // Return weapon observable
    return this.getWeaponDocument(id).snapshotChanges()
      .pipe(
        map(item => {

          // On récupère les données de notre document weapon
          const data = item.payload.data();

          // Création d'un objet Weapon à partir du JSON
          const weapon = new Weapon().fromJSON(data);
          // Ajout de l'id à l'arme
          weapon.id = id;

          // Use spread operator to add the id to the document data
          return weapon;
        })
      );
  }

  // Ajout d'une arme sur firebase
  addWeapon(weapon: Weapon) {
    // Ajout d'un document de type weapon sur Firebase
    this.db.collection<Weapon>(WeaponService.url).add(Object.assign({}, weapon));
  }

  // Modification d'une arme sur firebase
  updateWeapon(weapon: Weapon) {
    // Update du document sur Firebase en se basant sur son ID
    this.getWeaponDocument(weapon.id).update(Object.assign({}, weapon));
  }

  // Suppression d'une arme sur firebase
  deleteWeapon(id: string) {
    // Suppression du document sur Firebase en se basant sur son ID
    this.getWeaponDocument(id).delete();
  }

  // Création du service Firebase permettant de retourner un document Weapon en fonction de l'id de notre arme
  private getWeaponDocument(id: string): AngularFirestoreDocument<Weapon> {
    // Retourne notre document firebase
    return this.db.doc<Weapon>(WeaponService.url + `/` + id);
  }

}
