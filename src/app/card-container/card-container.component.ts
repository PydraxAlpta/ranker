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

  currentTarget: number = -1;
  dragging = false;
  
  onDragEnd(heldIndex: number): void {
    this.dragging = false;
    if (this.currentTarget > -1) {
      swap(this.cards, this.currentTarget, heldIndex);
    }
  }

  trackFn(_index: number, card: CardData) {
    return card.name;
  }
}

