import { Component, Input } from '@angular/core';
import { CardData, swap } from '../cards.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  @Input() header: string = 'Top List';
  @Input() cards: Array<CardData> = [];

  // NgForTrackBy
  trackFn(_index: number, card: CardData) {
    return card.name;
  }
}

