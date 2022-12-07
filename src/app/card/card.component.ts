import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name?: string;
  @Input() imageUrl?: string;
  @Input() index: number = -1;
  @Input() rank?: number;

  get tier(): string {
    switch (this.rank) {
      case 1:
        return 'S';
      case 2:
        return 'A+';
      case 3:
        return 'A';
      case 4:
        return 'B+';
      default:
        return '-';
    }
  }
}
