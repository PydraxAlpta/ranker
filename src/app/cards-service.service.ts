import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardData } from './cards.model';

@Injectable({providedIn: 'root'})
export class CardsService {
  cards$: BehaviorSubject<Array<CardData>> = new BehaviorSubject<Array<CardData>>([]);
  constructor() {
    fetch('assets/mediaCards.json').then(res => {
      res.json().then(value => {
        this.cards$.next(value);
      })
    });
  }
}
