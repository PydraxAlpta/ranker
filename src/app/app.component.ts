import { Component } from '@angular/core';
import { CardData, mediaCards } from './cards.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Array<CardData>;
  constructor() {
    this.cards = mediaCards.sort((a, b) => a.rank - b.rank);
  }
}
